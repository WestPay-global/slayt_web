import "server-only";

export { formatDate } from "./posts.client";

export type Author = {
    name: string;
    profilePic: string;
};

export type Thumbnail = {
    url: string;
    alt: string;
};

export type PostListItem = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    category?: string;
    tags: string[];
    thumbnail?: Thumbnail;
    authors: Author[];
    readTimeMinutes: number;
    publishedAt: string;
    updatedAt: string;
};

export type PostDetail = PostListItem & {
    content: string;
};

const BASE =
    process.env.LW_API_BASE ??
    "https://api.laughingwaffle.online/api/v1/projects/slayt";
const KEY = process.env.LW_API_KEY ?? "";

/**
 * Shared cache tag. Everything fetched from the CMS is tagged with this, so a
 * single `revalidateTag("posts")` (see /api/revalidate) refreshes the blog the
 * moment new content is published. The `revalidate` window below is only a
 * safety-net fallback in case the publish webhook is never wired up.
 */
export const POSTS_TAG = "posts";
const REVALIDATE_SECONDS = 60 * 60; // 1 hour fallback

function authHeaders() {
    return { Authorization: `Bearer ${KEY}` };
}

/** Fetch every published post (list view — no `content`). */
export async function getPosts(): Promise<PostListItem[]> {
    const res = await fetch(`${BASE}/posts/`, {
        headers: authHeaders(),
        next: { revalidate: REVALIDATE_SECONDS, tags: [POSTS_TAG] },
    });

    if (!res.ok) {
        throw new Error(`Failed to load posts: ${res.status}`);
    }

    const json = (await res.json()) as { data: PostListItem[] };
    return json.data ?? [];
}

/** Fetch a single post by slug (includes `content`). Returns null on 404. */
export async function getPost(slug: string): Promise<PostDetail | null> {
    const res = await fetch(`${BASE}/posts/${slug}/`, {
        headers: authHeaders(),
        next: {
            revalidate: REVALIDATE_SECONDS,
            tags: [POSTS_TAG, `post:${slug}`],
        },
    });

    if (res.status === 404) return null;

    if (!res.ok) {
        throw new Error(`Failed to load post "${slug}": ${res.status}`);
    }

    const json = (await res.json()) as { post: PostDetail };
    return json.post ?? null;
}
