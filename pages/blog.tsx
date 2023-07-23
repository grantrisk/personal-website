import { getAllPosts } from '@/lib/api'
import NavContainer from "@/components/NavContainer";
import Head from "next/head";
import Link from "next/link";

export default function Blog({ posts }) {
    return (
        <NavContainer>
            <Head>
                <title>Grant Risk - Blog</title>
                <meta name="description" content="This is my personal website where I share my thoughts in the form of blogs."/>
            </Head>
            <main>
                <h1>Blog Posts</h1>
                <ul>
                    {posts.map(post => (
                        <li key={post.slug}>
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </main>
        </NavContainer>
    );
}

export async function getStaticProps() {
    const posts = await getAllPosts();
    return {
        props: { posts },
    };
}
