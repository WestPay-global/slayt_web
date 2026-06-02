"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { PostDetail } from "@/lib/posts";
import { formatDate } from "@/lib/posts.client";

function slugify(text: string) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

/**
 * Pull the <h3> section headings out of the article HTML to build the table of
 * contents, and inject matching ids so the sidebar links can scroll to them.
 */
function useArticle(content: string) {
    return useMemo(() => {
        const headings: { id: string; text: string }[] = [];
        const seen = new Set<string>();

        const processed = content.replace(
            /<h3>([\s\S]*?)<\/h3>/g,
            (_match, inner: string) => {
                const text = inner.replace(/<[^>]+>/g, "").trim();
                if (!text) return `<h3>${inner}</h3>`;

                let id = slugify(text);
                while (seen.has(id)) id += "-x";
                seen.add(id);
                headings.push({ id, text });

                return `<h3 id="${id}">${inner}</h3>`;
            },
        );

        return { headings, processed };
    }, [content]);
}

export default function ArticleView({ post }: { post: PostDetail }) {
    const { headings, processed } = useArticle(post.content);
    const [activeId, setActiveId] = useState<string>("");

    const primaryTag = post.tags[0] ?? "Article";
    const author = post.authors[0];

    // Scroll-spy: highlight the section currently in view.
    useEffect(() => {
        if (headings.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
        );

        headings.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [headings]);

    const handleTocClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveId(id);
        }
    };

    return (
        <>
            {/* HERO */}
            <section className="px-6 pt-12 md:pt-16">
                <div className="mx-auto max-w-5xl">
                    <Link href="/blog">
                        <motion.span
                            whileHover={{ x: -3 }}
                            className="inline-flex items-center gap-2 text-sm font-medium text-muted_foreground hover:text-blue transition-colors mb-10"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to blog
                        </motion.span>
                    </Link>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="text-3xl md:text-5xl font-black uppercase text-navy leading-[1.05] tracking-tight text-balance"
                    >
                        {post.title}
                    </motion.h1>

                    {post.excerpt && (
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="mt-6 text-lg md:text-xl italic text-muted_foreground leading-relaxed max-w-3xl"
                        >
                            {post.excerpt}
                        </motion.p>
                    )}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 flex flex-wrap items-center gap-3 text-sm"
                    >
                        <span className="inline-flex items-center gap-2 font-semibold tracking-wide uppercase text-xs px-4 py-1.5 rounded-full bg-rose-50 text-rose-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                            {primaryTag}
                        </span>
                        <span className="text-muted_foreground/50">•</span>
                        <span className="text-muted_foreground">
                            {formatDate(post.publishedAt)}
                        </span>
                        <span className="text-muted_foreground/50">•</span>
                        <span className="text-muted_foreground">
                            {post.readTimeMinutes} min read
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* FEATURED IMAGE */}
            {post.thumbnail?.url && (
                <section className="px-6 mt-10 md:mt-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mx-auto max-w-5xl"
                    >
                        <div className="relative h-[240px] sm:h-[360px] md:h-[460px] w-full overflow-hidden rounded-3xl">
                            <Image
                                src={post.thumbnail.url}
                                alt={post.thumbnail.alt || post.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 1024px"
                            />
                        </div>
                    </motion.div>
                </section>
            )}

            {/* BODY: TOC SIDEBAR + ARTICLE */}
            <section className="px-6 mt-14 md:mt-20 pb-24">
                <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Sidebar */}
                    <aside className="hidden lg:block lg:w-66 lg:flex-shrink-0">
                        <div className="lg:sticky lg:top-28">
                            {headings.length > 0 && (
                                <div className="rounded-2xl bg-[#fafafa] p-6 mb-6">
                                    <p className="text-xs font-bold tracking-widest uppercase text-muted_foreground mb-4">
                                        In this article
                                    </p>
                                    <nav className="space-y-1">
                                        {headings.map((h) => {
                                            const active = activeId === h.id;
                                            return (
                                                <button
                                                    key={h.id}
                                                    onClick={() =>
                                                        handleTocClick(h.id)
                                                    }
                                                    className={`group flex items-start gap-3 w-full text-left text-sm leading-snug py-1.5 transition-colors ${
                                                        active
                                                            ? "text-navy font-semibold"
                                                            : "text-muted_foreground hover:text-navy"
                                                    }`}
                                                >
                                                    <span
                                                        className={`mt-1.5 h-3.5 w-0.5 rounded-full flex-shrink-0 transition-all ${
                                                            active
                                                                ? "bg-teal"
                                                                : "bg-transparent group-hover:bg-border"
                                                        }`}
                                                    />
                                                    {h.text}
                                                </button>
                                            );
                                        })}
                                    </nav>
                                </div>
                            )}

                            {/* Author */}
                            {author && (
                                <div className="flex items-center gap-3">
                                    {author.profilePic && (
                                        <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                                            <Image
                                                src={author.profilePic}
                                                alt={author.name}
                                                fill
                                                className="object-cover"
                                                sizes="44px"
                                            />
                                        </div>
                                    )}
                                    <div>
                                        <p className="font-semibold text-navy text-sm">
                                            {author.name}
                                        </p>
                                        <p className="text-xs text-muted_foreground">
                                            Author
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>

                    {/* Article */}
                    <article
                        className="flex-1 min-w-0 text-muted_foreground text-[17px]
                            [&>p]:mb-6
                            [&>p]:leading-8

                            [&>h3]:scroll-mt-28
                            [&>h3]:mt-12
                            [&>h3]:mb-4
                            [&>h3]:text-2xl
                            [&>h3]:font-bold
                            [&>h3]:leading-snug
                            [&>h3]:text-navy

                            [&_ul]:my-6
                            [&_ul]:list-disc
                            [&_ul]:pl-6
                            [&_ol]:my-6
                            [&_ol]:list-decimal
                            [&_ol]:pl-6
                            [&_li]:mb-2
                            [&_li]:leading-8
                            [&_li>p]:mb-0

                            [&_img]:my-8
                            [&_img]:w-full
                            [&_img]:rounded-2xl

                            [&>blockquote]:my-8
                            [&>blockquote]:border-l-4
                            [&>blockquote]:border-teal
                            [&>blockquote]:bg-teal/5
                            [&>blockquote]:px-5
                            [&>blockquote]:py-4
                            [&>blockquote]:italic
                            [&>blockquote]:text-navy
                            [&>blockquote]:rounded-r-xl
                            [&>blockquote_p]:mb-0

                            [&_strong]:text-navy
                            [&_strong]:font-semibold

                            [&_a]:text-blue
                            [&_a]:underline
                            [&_a]:underline-offset-2"
                        dangerouslySetInnerHTML={{ __html: processed }}
                    />
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="relative overflow-hidden rounded-3xl bg-[#1a1a2e] p-10 md:p-14 shadow-2xl"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue/20 blur-3xl pointer-events-none"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.15, 0.25, 0.15],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-0 left-1/3 w-60 h-60 rounded-full bg-teal/20 blur-3xl pointer-events-none"
                        />

                        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight max-w-md">
                                    Ready to turn chores into{" "}
                                    <span className="text-blue">
                                        adventures?
                                    </span>
                                </h2>
                                <p className="mt-4 text-white/60 max-w-md leading-relaxed">
                                    Start your free trial and bring calmer
                                    mornings to your home.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 flex-shrink-0">
                                <Link href="/pricing">
                                    <motion.span
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="inline-flex items-center gap-2 bg-blue text-white font-bold text-sm px-6 py-3 rounded-full"
                                    >
                                        Start free trial
                                    </motion.span>
                                </Link>
                                <Link href="/blog">
                                    <motion.span
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-bold text-sm px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
                                    >
                                        Read more stories
                                    </motion.span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
