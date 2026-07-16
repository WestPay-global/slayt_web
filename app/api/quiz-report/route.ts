import { readFile } from "fs/promises";
import path from "path";
import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";
import { createLead } from "@/lib/monday";

/**
 * Sends the parenting-assessment report to the parent's email.
 *
 * Uses Resend's REST API directly (no SDK dependency). Required env:
 *
 *   RESEND_API_KEY=re_xxxxxxxx
 *   QUIZ_FROM_EMAIL="SLAYT <reports@yourdomain.com>"   # a verified sender
 *
 * All images (logo, teddy mascot, award, store badges and the dynamically
 * generated score ring) are embedded as inline CID attachments, so the email
 * renders correctly no matter where the site is deployed.
 */

const APP_STORE_URL =
    "https://apps.apple.com/ng/app/slayt-closer-together/id6470950940";
const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.slayt&hl=en";

type ReportPayload = {
    fullName?: string;
    email?: string;
    consent?: boolean;
    age?: string;
    childFor?: string;
    score?: number;
    maxScore?: number;
    tier?: string;
    summary?: string;
    strengths?: string[];
    opportunity?: string;
};

function escapeHtml(str: string) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

/* ------------------------------------------------------------------ */
/* Inline image attachments                                            */
/* ------------------------------------------------------------------ */

const EMAIL_ASSETS = ["logo", "teddy", "award", "apple", "google"] as const;

// Static assets are read once and cached for the lifetime of the process.
let assetCache: { filename: string; content: string; content_id: string }[] | null =
    null;

async function loadStaticAssets() {
    if (assetCache) return assetCache;
    const dir = path.join(process.cwd(), "public", "email");
    assetCache = await Promise.all(
        EMAIL_ASSETS.map(async (name) => ({
            filename: `${name}.png`,
            content: (await readFile(path.join(dir, `${name}.png`))).toString(
                "base64",
            ),
            content_id: name,
        })),
    );
    return assetCache;
}

/**
 * Renders the score as a partial ring (arc length proportional to
 * score/maxScore) and rasterizes it to PNG — email clients strip SVG, and a
 * CSS border can only draw a full circle.
 */
async function buildRingPng(score: number, maxScore: number) {
    const size = 300;
    const stroke = 26;
    const r = (size - stroke) / 2;
    const c = size / 2;
    const circumference = 2 * Math.PI * r;
    const pct = Math.max(0, Math.min(1, maxScore > 0 ? score / maxScore : 0));

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="#E8EEF9" stroke-width="${stroke}" />
  <circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="#2F6FED" stroke-width="${stroke}"
    stroke-linecap="round" stroke-dasharray="${circumference * pct} ${circumference}"
    transform="rotate(-90 ${c} ${c})" />
</svg>`;

    const png = await sharp(Buffer.from(svg)).png().toBuffer();
    return {
        filename: "ring.png",
        content: png.toString("base64"),
        content_id: "ring",
    };
}

/* ------------------------------------------------------------------ */
/* Email HTML                                                          */
/* ------------------------------------------------------------------ */

/** Small colored icon circle rendered with a unicode glyph (email-safe). */
function iconCircle(bg: string, glyph: string, size = 40) {
    return `<div style="width:${size}px;height:${size}px;line-height:${size}px;border-radius:50%;background:${bg};color:#ffffff;font-size:${Math.round(size * 0.45)}px;text-align:center;font-weight:bold;">${glyph}</div>`;
}

/**
 * Table-based, inline-styled HTML so it renders consistently across email
 * clients (Gmail, Outlook, Apple Mail). No flexbox/grid, no external CSS.
 * Every image references an inline CID attachment.
 */
function buildEmailHtml(p: ReportPayload) {
    const name = escapeHtml(p.fullName ?? "there");
    const score = p.score ?? 0;
    const maxScore = p.maxScore ?? 30;
    const tier = escapeHtml(p.tier ?? "");
    const summary = escapeHtml(p.summary ?? "");
    const opportunity = escapeHtml(p.opportunity ?? "");

    const strengths = (p.strengths ?? [])
        .map(
            (s) => `
      <tr>
        <td width="30" valign="top" style="padding:7px 0;">
          <div style="width:22px;height:22px;line-height:22px;border-radius:50%;background:#22B573;color:#ffffff;font-size:12px;text-align:center;">&#10003;</div>
        </td>
        <td valign="top" style="padding:7px 0;color:#0F2B46;font-size:15px;line-height:22px;">${escapeHtml(s)}</td>
      </tr>`,
        )
        .join("");

    return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#EEF4FD;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#EEF4FD;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background:#F5F8FE;border-radius:20px;font-family:Arial,Helvetica,sans-serif;">

        <!-- logo -->
        <tr><td align="center" style="padding:32px 24px 4px;">
          <img src="cid:logo" alt="Slayt" width="140" style="display:block;border:0;" />
        </td></tr>

        <!-- heading + greeting, teddy on the right -->
        <tr><td style="padding:8px 28px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td valign="middle">
                <h1 style="margin:0;font-size:34px;line-height:40px;color:#0F2B46;font-weight:bold;">Your Child&rsquo;s</h1>
                <h1 style="margin:0;font-size:34px;line-height:40px;color:#2F6FED;font-weight:bold;">Responsibility Profile</h1>
                <p style="margin:22px 0 0;font-size:18px;color:#2F6FED;font-weight:bold;">Hi ${name},</p>
                <p style="margin:4px 0 0;font-size:16px;color:#5A6B7B;">here is your personalised parenting report.</p>
              </td>
              <td width="200" align="right" valign="middle" style="padding-left:8px;">
                <img src="cid:teddy" alt="Slayt mascot" width="185" style="display:block;border:0;" />
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- score card -->
        <tr><td style="padding:20px 24px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;">
            <tr>
              <td width="200" align="center" valign="middle" style="padding:28px 10px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="150" height="150" align="center" valign="middle" background="cid:ring" style="background:url('cid:ring') no-repeat center / 150px 150px;">
                      <div style="font-size:44px;line-height:44px;font-weight:bold;color:#0F2B46;">${score}</div>
                      <div style="font-size:17px;line-height:22px;color:#8A97A6;font-weight:bold;">/${maxScore}</div>
                    </td>
                  </tr>
                </table>
              </td>
              <td valign="middle" style="padding:28px 28px 28px 8px;border-left:1px solid #EDF1F6;">
                <table role="presentation" cellpadding="0" cellspacing="0" style="background:#FDF3D7;border-radius:12px;">
                  <tr>
                    <td style="padding:8px 8px 8px 10px;">${iconCircle("#F2B01E", "&#8599;", 36)}</td>
                    <td style="padding:8px 16px 8px 6px;font-size:17px;font-weight:bold;color:#0F2B46;">${tier}</td>
                  </tr>
                </table>
                <p style="margin:14px 0 0;font-size:15px;line-height:23px;color:#0F2B46;">${summary}</p>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- strengths + opportunity -->
        <tr><td style="padding:16px 24px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="49%" valign="top" style="background:#F1FAF4;border-radius:16px;padding:22px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>${iconCircle("#22B573", "&#9733;")}</td>
                    <td style="padding-left:12px;font-size:19px;font-weight:bold;color:#22B573;">Strengths</td>
                  </tr>
                </table>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:12px;">${strengths}</table>
              </td>
              <td width="2%"></td>
              <td width="49%" valign="top" style="background:#EFF4FE;border-radius:16px;padding:22px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>${iconCircle("#2F6FED", "&#8599;")}</td>
                    <td style="padding-left:12px;font-size:19px;font-weight:bold;color:#2F6FED;">Biggest Opportunity</td>
                  </tr>
                </table>
                <p style="margin:16px 0 0;font-size:15px;line-height:24px;color:#0F2B46;">${opportunity}</p>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- what this means -->
        <tr><td style="padding:16px 24px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F4F1FE;border-radius:16px;">
            <tr>
              <td valign="middle" style="padding:22px;">
                <p style="margin:0 0 8px;font-size:19px;font-weight:bold;color:#7C4DFF;">What This Means</p>
                <p style="margin:0;font-size:15px;line-height:23px;color:#0F2B46;">Every child grows at their own pace. With the right structure, encouragement, and consistency, your child will continue to build strong habits that lead to confidence, independence and lifelong success.</p>
              </td>
              <td width="140" align="right" valign="middle" style="padding:12px 18px 12px 0;">
                <img src="cid:award" alt="Trophy" width="125" style="display:block;border:0;" />
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- CTA -->
        <tr><td style="padding:16px 24px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#2F6FED;border-radius:16px;">
            <tr>
              <td valign="middle" style="padding:26px 8px 26px 26px;">
                <p style="margin:0 0 6px;font-size:21px;font-weight:bold;color:#ffffff;">Ready to Build Stronger Habits?</p>
                <p style="margin:0;font-size:14px;line-height:21px;color:#DCE8FF;">Unlock personalised action steps, age-appropriate responsibilities, rewards and more inside the Slayt app.</p>
              </td>
              <td width="170" align="center" valign="middle" style="padding:20px 20px 20px 4px;">
                <a href="${APP_STORE_URL}" style="display:block;margin-bottom:10px;"><img src="cid:apple" alt="Download on the App Store" width="150" style="display:block;border:0;" /></a>
                <a href="${PLAY_STORE_URL}" style="display:block;"><img src="cid:google" alt="Get it on Google Play" width="150" style="display:block;border:0;" /></a>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- footer -->
        <tr><td align="center" style="padding:26px 24px 30px;">
          <p style="margin:0;font-size:13px;color:#5A6B7B;">&#128153; Slayt is here to help you raise responsible, confident, and independent children.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/* ------------------------------------------------------------------ */
/* Route handler                                                       */
/* ------------------------------------------------------------------ */

export async function POST(req: NextRequest) {
    let body: ReportPayload;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json(
            { sent: false, message: "Invalid request body" },
            { status: 400 },
        );
    }

    if (!body.email || !/\S+@\S+\.\S+/.test(body.email)) {
        return NextResponse.json(
            { sent: false, message: "A valid email is required" },
            { status: 400 },
        );
    }

    // The user must have opted in before we email them.
    if (!body.consent) {
        return NextResponse.json(
            { sent: false, message: "Consent is required" },
            { status: 400 },
        );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.QUIZ_FROM_EMAIL;

    // No provider configured — succeed silently so the flow isn't blocked.
    if (!apiKey || !from) {
        console.warn(
            "[quiz-report] RESEND_API_KEY / QUIZ_FROM_EMAIL not set — email not sent.",
        );
        return NextResponse.json({
            sent: false,
            message: "Email not configured",
        });
    }

    try {
        const [staticAssets, ring] = await Promise.all([
            loadStaticAssets(),
            buildRingPng(body.score ?? 0, body.maxScore ?? 30),
        ]);

        // Save the lead to Monday.com
        try {
            await createLead(
                body.fullName ?? "Unknown",
                body.email
              );
            } catch (err) {
                console.error("[quiz-report] Failed to create Monday lead:", err);
          }

        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from,
                to: [body.email],
                subject: "Your Child's Responsibility Profile — SLAYT",
                html: buildEmailHtml(body),
                attachments: [...staticAssets, ring],
            }),
        });

        if (!res.ok) {
            const detail = await res.text();
            console.error("[quiz-report] Resend error:", res.status, detail);
            return NextResponse.json(
                { sent: false, message: "Failed to send email" },
                { status: 502 },
            );
        }

        return NextResponse.json({ sent: true });
    } catch (err) {
        console.error("[quiz-report] Unexpected error:", err);
        return NextResponse.json(
            { sent: false, message: "Failed to send email" },
            { status: 500 },
        );
    }
}
