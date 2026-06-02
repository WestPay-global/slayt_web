// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://theslayt.com",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: "https://theslayt.com/features",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://theslayt.com/about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://theslayt.com/pricing",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://theslayt.com/contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: "https://theslayt.com/blog",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: "https://theslayt.com/faq",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: "https://theslayt.com/privacy",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: "https://theslayt.com/terms",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: "https://theslayt.com/accessibility",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: "https://theslayt.com/tasks-and-rewards",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ];
}
