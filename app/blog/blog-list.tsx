"use client";

import {
    motion,
    useScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import NewsletterForm from "@/components/NEWSLETTER/newsletter";
import type { PostListItem } from "@/lib/posts";
import { formatDate } from "@/lib/posts.client";

const tagColors: Record<
    string,
    { bg: string; text: string; dot: string; gradient: string }
> = {
    Parenting: {
        bg: "bg-rose-50",
        text: "text-rose-600",
        dot: "bg-rose-400",
        gradient: "from-rose-400 to-pink-500",
    },
    Psychology: {
        bg: "bg-violet-50",
        text: "text-violet-600",
        dot: "bg-violet-400",
        gradient: "from-violet-400 to-indigo-500",
    },
    Story: {
        bg: "bg-amber-50",
        text: "text-amber-600",
        dot: "bg-amber-400",
        gradient: "from-amber-400 to-orange-500",
    },
    Behavior: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        dot: "bg-emerald-400",
        gradient: "from-emerald-400 to-teal-500",
    },
    Routine: {
        bg: "bg-sky-50",
        text: "text-sky-600",
        dot: "bg-sky-400",
        gradient: "from-sky-400 to-blue-500",
    },
    Product: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        dot: "bg-indigo-400",
        gradient: "from-indigo-400 to-violet-500",
    },
};

const fallbackColor = {
    bg: "bg-gray-50",
    text: "text-gray-600",
    dot: "bg-gray-400",
    gradient: "from-slate-400 to-slate-600",
};

function TagPill({
    tag,
    active,
    onClick,
}: {
    tag: string;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                active
                    ? "bg-[#1a1a2e] text-white border-[#1a1a2e] shadow-lg"
                    : "bg-white text-[#5a5a7a] border-[#e8e4f0] hover:border-[#1a1a2e]/30"
            }`}
        >
            {active && (
                <motion.span
                    layoutId="activeTag"
                    className="absolute inset-0 rounded-full bg-[#1a1a2e]"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
            )}
            {tag}
        </motion.button>
    );
}

function PostCard({ post, index }: { post: PostListItem; index: number }) {
    const primaryTag = post.tags[0] ?? "";
    const colors = tagColors[primaryTag] || fallbackColor;
    const author = post.authors[0];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            layout
        >
            <Link href={`/blog/${post.slug}`} className="group block">
                <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {/* Thumbnail cover */}
                    <div
                        className={`relative h-56 overflow-hidden rounded-2xl bg-gradient-to-br ${colors.gradient}`}
                    >
                        {post.thumbnail?.url && (
                            <Image
                                src={post.thumbnail.url}
                                alt={post.thumbnail.alt || post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        {/* Tag + read time */}
                        <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1 rounded-full bg-white/90 text-[#1a1a2e] backdrop-blur-md shadow-sm">
                                <span
                                    className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}
                                />
                                {primaryTag || "Article"}
                            </span>
                            <span className="text-xs font-medium text-white bg-black/30 backdrop-blur-md px-3 py-1 rounded-full">
                                {post.readTimeMinutes} min read
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="my-6 flex flex-col">
                        <h3 className="font-bold text-navy text-[20px] leading-tight group-hover:text-blue transition-colors duration-300">
                            {post.title}
                        </h3>

                        <p className="mt-3 text-muted_foreground text-[15px] leading-relaxed line-clamp-2">
                            {post.excerpt}
                        </p>

                        <div className="mt-5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {author?.profilePic && (
                                    <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                        <Image
                                            src={author.profilePic}
                                            alt={author.name}
                                            fill
                                            className="object-cover"
                                            sizes="36px"
                                        />
                                    </div>
                                )}
                                <p className="text-sm font-medium text-navy">
                                    {author?.name}
                                </p>
                            </div>
                            <p className="text-sm text-muted_foreground font-medium">
                                {formatDate(post.publishedAt)}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}

function FeaturedPost({ posts }: { posts: PostListItem[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentPost = posts[currentIndex];

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % posts.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [posts.length]);

    if (!currentPost) return null;

    return (
        <Link href={`/blog/${currentPost.slug}`}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.015 }}
                className="group relative overflow-hidden rounded-3xl bg-[#1a1a2e] p-10 md:p-14 shadow-2xl cursor-pointer"
            >
                <motion.div
                    style={{ y }}
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

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Featured Story
                    </motion.div>

                    <motion.h2
                        key={`title-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl group-hover:text-blue transition-colors duration-500"
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        {currentPost.title}
                    </motion.h2>

                    <motion.p
                        key={`excerpt-${currentIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-5 text-white/60 max-w-xl text-base leading-relaxed line-clamp-2"
                    >
                        {currentPost.excerpt}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="mt-8 inline-flex items-center gap-3 bg-white text-[#1a1a2e] font-bold text-sm px-6 py-3 rounded-full group-hover:bg-blue transition-colors duration-300"
                    >
                        Read full story
                        <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.div>
                </div>

                <motion.div
                    key={`num-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute bottom-8 right-10 text-[120px] font-black text-white/[0.04] leading-none pointer-events-none select-none"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    {(currentIndex + 1).toString().padStart(2, "0")}
                </motion.div>
            </motion.div>
        </Link>
    );
}

export default function BlogList({ posts }: { posts: PostListItem[] }) {
    const allTags = [
        "All",
        ...Array.from(new Set(posts.flatMap((p) => p.tags))),
    ];
    const topicCount = allTags.length - 1;
    const sinceYear = posts.length
        ? Math.min(
              ...posts.map((p) => new Date(p.publishedAt).getUTCFullYear()),
          )
        : new Date().getUTCFullYear();

    const [activeTag, setActiveTag] = useState("All");
    const filtered =
        activeTag === "All"
            ? posts
            : posts.filter((p) => p.tags.includes(activeTag));

    return (
        <main
            className="relative overflow-x-clip"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
            `}</style>

            {/* HERO */}
            <section className="relative overflow-hidden px-6 pt-24 pb-16">
                <div className="relative mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-blue bg-[#fafafa] px-4 py-2 rounded-full mb-6 border border-[#e0e7ff]"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
                        Slayt Journal
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="text-5xl md:text-7xl font-black text-navy leading-[1.05] max-w-4xl"
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        Stories that change{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-blue">
                                how you parent
                            </span>
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.9,
                                    ease: "easeOut",
                                }}
                                className="absolute bottom-1 left-0 right-0 h-3 bg-navy/40 -z-0 origin-left rounded"
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-6 text-muted_foreground text-lg max-w-xl leading-relaxed"
                    >
                        Ideas, research, and honest stories for families
                        building better habits — one day at a time.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-10 flex gap-8"
                    >
                        {[
                            [String(posts.length), "Articles"],
                            [String(topicCount), "Topics"],
                            [String(sinceYear), "Since"],
                        ].map(([num, label]) => (
                            <div key={label}>
                                <div
                                    className="text-2xl font-black text-[#1a1a2e]"
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                    }}
                                >
                                    {num}
                                </div>
                                <div className="text-xs text-muted_foreground mt-0.5">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FEATURED */}
            {posts.length > 0 && (
                <section className="px-6 py-8">
                    <div className="mx-auto max-w-6xl">
                        <FeaturedPost posts={posts} />
                    </div>
                </section>
            )}

            {/* FILTER + GRID */}
            <section className="px-6 py-12 pb-24">
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-2 mb-10"
                    >
                        {allTags.map((tag) => (
                            <TagPill
                                key={tag}
                                tag={tag}
                                active={activeTag === tag}
                                onClick={() => setActiveTag(tag)}
                            />
                        ))}
                    </motion.div>

                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-xs font-bold tracking-widest uppercase text-muted_foreground">
                            {activeTag === "All" ? "All stories" : activeTag}
                        </span>
                        <div className="flex-1 h-px bg-[#ede9f6]" />
                        <motion.span
                            key={filtered.length}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-xs text-muted_foreground"
                        >
                            {filtered.length} articles
                        </motion.span>
                    </div>

                    <motion.div layout className="grid md:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((post, i) => (
                                <PostCard
                                    key={post.slug}
                                    post={post}
                                    index={i}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    <AnimatePresence>
                        {filtered.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-20 text-[#9a96b0]"
                            >
                                No articles in this category yet.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* NEWSLETTER */}
            <section className="px-6 py-20 relative overflow-hidden">
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="group relative overflow-hidden rounded-3xl bg-[#1a1a2e] p-12 md:p-16 shadow-2xl"
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
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                        <div className="relative z-10 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-semibold mb-8"
                            >
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                Newsletter Access
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                                className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
                                style={{
                                    fontFamily:
                                        "'Playfair Display', Georgia, serif",
                                }}
                            >
                                WANT SLAYT UPDATES?
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-muted_foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10"
                            >
                                Subscribe to the Slayt newsletter and be the
                                first to hear about new features, updates, and
                                improvements
                                <span className="text-muted_foreground text-2xl ml-2">
                                    ⚡
                                </span>
                            </motion.p>

                            <NewsletterForm />

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mt-6 text-sm text-muted_foreground"
                            >
                                You can unsubscribe at any time. Learn more
                                about our{" "}
                                <Link
                                    href="/privacy"
                                    className="text-blue cursor-pointer hover:underline transition-all"
                                >
                                    Privacy Policy
                                </Link>
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
