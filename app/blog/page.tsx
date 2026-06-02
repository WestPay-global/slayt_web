import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getPosts } from "@/lib/posts";
import BlogList from "./blog-list";

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
