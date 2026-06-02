"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // force browser scroll reset
        document.documentElement.scrollTo(0, 0);
        document.body.scrollTo(0, 0);

        // fallback (some browsers need delay)
        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
        });
    }, [pathname]);

    return null;
}
