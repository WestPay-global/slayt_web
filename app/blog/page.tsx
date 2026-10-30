import { Metadata } from "next";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getPosts } from "@/lib/posts";
import BlogList from "./blog-list";

export const metadata: Metadata = {
    title: "Blog: Turning Chores into Adventures",
    alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <>
            <Navbar />
            <BlogList posts={posts} />
            <Footer />
        </>
    );
}
