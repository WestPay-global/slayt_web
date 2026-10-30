import { readFile } from "fs/promises";
import path from "path";
import sharp from "sharp";
import { ImageResponse } from "next/og";
import { ogSize } from "@/lib/og";

// Not currently wired up: the site uses the static public/og-image.png. To go
// back to a generated image, add app/opengraph-image.tsx (and
// app/twitter-image.tsx) exporting `alt`, `size`, `contentType` and a default
// function returning renderOgImage().

const NAVY = "#0B2E4E";
const BLUE = "#12A0F5";
const LIGHT_BLUE = "#E0F4FF";

const HEADLINE = "Help your child grow into the person they’re becoming.";
const TAGLINE = "Routines, tasks and rewards in one app.";
const BADGE = "Made for kids aged 4–18";

async function toDataUrl(file: string, width?: number) {
    let img = sharp(await readFile(path.join(process.cwd(), file)));
    if (width) img = img.resize({ width });
    const buf = await img.png({ compressionLevel: 9 }).toBuffer();
    return `data:image/png;base64,${buf.toString("base64")}`;
}

/**
 * Inter from Google Fonts, subset to the characters we render. If the fetch
 * fails (e.g. offline build) the image still renders with the default font.
 */
async function loadFonts() {
    try {
        const text = encodeURIComponent(HEADLINE + TAGLINE + BADGE);
        const css = await fetch(
            `https://fonts.googleapis.com/css2?family=Inter:wght@500;800&text=${text}`,
        ).then((r) => r.text());
        const faces = [
            ...css.matchAll(
                /font-weight: (\d+);[\s\S]*?src: url\((.+?)\) format\('(?:opentype|truetype)'\)/g,
            ),
        ];
        return await Promise.all(
            faces.map(async ([, weight, url]) => ({
                name: "Inter",
                data: await fetch(url).then((r) => r.arrayBuffer()),
                weight: Number(weight) as 500 | 800,
                style: "normal" as const,
            })),
        );
    } catch (err) {
        console.error("og-image: failed to load fonts", err);
        return [];
    }
}

export async function renderOgImage() {
    const [logo, preview, fonts] = await Promise.all([
        toDataUrl("images/logo.png"),
        toDataUrl("images/App_preview.png", 640),
        loadFonts(),
    ]);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    position: "relative",
                    background: LIGHT_BLUE,
                    fontFamily: "Inter",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: 600,
                        padding: "60px 0 60px 72px",
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} width={150} height={63} alt="" />
                    <div
                        style={{
                            marginTop: 36,
                            fontSize: 54,
                            fontWeight: 800,
                            lineHeight: 1.12,
                            letterSpacing: -1,
                            color: NAVY,
                        }}
                    >
                        {HEADLINE}
                    </div>
                    <div
                        style={{
                            marginTop: 20,
                            fontSize: 26,
                            fontWeight: 500,
                            color: NAVY,
                            opacity: 0.75,
                        }}
                    >
                        {TAGLINE}
                    </div>
                    <div style={{ display: "flex", marginTop: 32 }}>
                        <div
                            style={{
                                padding: "12px 24px",
                                borderRadius: 999,
                                background: BLUE,
                                color: "white",
                                fontSize: 24,
                                fontWeight: 800,
                            }}
                        >
                            {BADGE}
                        </div>
                    </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={preview}
                    width={640}
                    height={419}
                    alt=""
                    style={{ position: "absolute", right: -20, bottom: 0 }}
                />
            </div>
        ),
        { ...ogSize, fonts },
    );
}
