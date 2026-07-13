import { NextRequest, NextResponse } from "next/server";

/**
 * Sends the parenting-assessment report to the parent's email.
 *
 * Uses Resend's REST API directly (no SDK dependency). To enable real
 * delivery, set these in `.env.local`:
 *
 *   RESEND_API_KEY=re_xxxxxxxx
 *   QUIZ_FROM_EMAIL="SLAYT <reports@yourdomain.com>"   # a verified sender
 *
 * Without a key the route no-ops gracefully (returns { sent: false }) so the
 * quiz flow still completes in local/dev environments.
 */

type ReportPayload = {
    fullName?: string;
    email?: string;
    country?: string;
    age?: string;
    childFor?: string;
    score?: number;
    maxScore?: number;
    tier?: string;
    summary?: string;
    strengths?: string[];
    opportunity?: string;
};

function buildEmailHtml(p: ReportPayload) {
    const strengths = (p.strengths ?? [])
        .map(
            (s) =>
                `<li style="margin:6px 0;color:#003755;">✅ ${escapeHtml(s)}</li>`,
        )
        .join("");

    return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#003755;">
      <h1 style="color:#003755;font-size:24px;">Your Child's Responsibility Profile</h1>
      <p style="color:#798185;">Hi ${escapeHtml(p.fullName ?? "there")}, here is your personalised parenting report.</p>

      <div style="text-align:center;margin:24px 0;">
        <div style="font-size:48px;font-weight:bold;color:#003755;">${p.score ?? "-"}<span style="font-size:20px;color:#798185;">/${p.maxScore ?? 30}</span></div>
        <div style="display:inline-block;background:#FBEECB;color:#003755;padding:8px 18px;border-radius:999px;font-weight:bold;margin-top:8px;">${escapeHtml(p.tier ?? "")}</div>
      </div>

      <p style="color:#798185;line-height:1.6;">${escapeHtml(p.summary ?? "")}</p>

      <h3 style="color:#003755;">Strengths</h3>
      <ul style="list-style:none;padding:0;">${strengths}</ul>

      <h3 style="color:#003755;">Biggest Opportunity</h3>
      <p style="color:#003755;line-height:1.6;">${escapeHtml(p.opportunity ?? "")}</p>

      <hr style="border:none;border-top:1px solid #e5e9ec;margin:24px 0;" />
      <p style="color:#798185;font-size:13px;">Child age: ${escapeHtml(p.age ?? "-")} · Assessment for: ${escapeHtml(p.childFor ?? "-")} · ${escapeHtml(p.country ?? "-")}</p>
      <p style="color:#798185;font-size:13px;">Start building responsibility today with SLAYT.</p>
    </div>`;
}

function escapeHtml(str: string) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

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

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.QUIZ_FROM_EMAIL;

    // No provider configured — succeed silently so the flow isn't blocked.
    if (!apiKey || !from) {
        console.warn(
            "[quiz-report] RESEND_API_KEY / QUIZ_FROM_EMAIL not set — email not sent.",
        );
        return NextResponse.json({ sent: false, message: "Email not configured" });
    }

    try {
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
