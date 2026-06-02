import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { POSTS_TAG } from "@/lib/posts";

/**
 * On-demand cache invalidation. Point your CMS publish webhook here so the
 * blog refreshes immediately when new content goes live:
 *
 *   POST /api/revalidate
 *   Header: x-revalidate-secret: <REVALIDATE_SECRET>
 *   (or)   ?secret=<REVALIDATE_SECRET>
 */
export async function POST(req: NextRequest) {
    const secret =
        req.headers.get("x-revalidate-secret") ??
        req.nextUrl.searchParams.get("secret");

    if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ revalidated: false, message: "Invalid secret" }, { status: 401 });
    }

    revalidateTag(POSTS_TAG, "max");

    return NextResponse.json({ revalidated: true, now: Date.now() });
}
