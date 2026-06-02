/** Client-safe helpers (no secrets, no server-only imports). */

/** "2026-05-30T00:00:00.000Z" -> "May 30, 2026" */
export function formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
}
