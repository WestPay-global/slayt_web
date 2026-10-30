export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "Slayt parenting app: family routines, tasks and rewards";

/**
 * public/og-image.png. Pages that define their own `openGraph` / `twitter`
 * replace the root one entirely, so they must list this image themselves.
 */
export const ogImage = { url: "/og-image.png", ...ogSize, alt: ogAlt };
