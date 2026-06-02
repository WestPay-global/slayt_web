import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getPost, getPosts } from "@/lib/posts";
import ArticleView from "./article-view";

export async function generateStaticParams() {
    try {
        const posts = await getPosts();
        return posts.map((p) => ({ slug: p.slug }));
    } catch (err) {
        // Don't fail the whole build if the CMS is unreachable or env vars are
        // missing — pages are still rendered on-demand at request time.
        console.error("generateStaticParams: failed to prefetch slugs", err);
        return [];
    }
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) return { title: "Post not found" };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.publishedAt,
            authors: post.authors.map((a) => a.name),
        },
    };
}

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) return notFound();

    return (
        <main className="relative overflow-x-clip">
            <Navbar />
            <ArticleView post={post} />
            <Footer />
        </main>
    );
}
