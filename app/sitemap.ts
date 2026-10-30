// app/sitemap.ts
import { MetadataRoute } from "next";

const BASE = "https://theslayt.com";

// Set `updated` to the page's real last-edit date whenever its content
// changes. changefreq/priority are omitted: Google ignores them.
const pages: { path: string; updated: string }[] = [
    { path: "", updated: "2026-10-24" },
    { path: "/features", updated: "2026-10-24" },
    { path: "/tasks-and-rewards", updated: "2026-10-24" },
    { path: "/pricing", updated: "2026-10-24" },
    { path: "/about", updated: "2026-10-24" },
    { path: "/blog", updated: "2026-10-24" },
    { path: "/faq", updated: "2026-10-24" },
    { path: "/contact", updated: "2026-10-24" },
    { path: "/privacy", updated: "2026-10-24" },
    { path: "/terms", updated: "2026-10-24" },
    { path: "/accessibility", updated: "2026-10-24" },
];

export default function sitemap(): MetadataRoute.Sitemap {
    return pages.map((p) => ({
        url: `${BASE}${p.path}`,
        lastModified: p.updated,
    }));
}
