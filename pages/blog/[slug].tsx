import { getPostBySlug, getAllPosts } from '@/lib/api'
import NavContainer from "@/components/NavContainer";
import Head from "next/head";

export default function BlogPost({ post }) {
    return (
        <NavContainer>
            <Head>
                <title>Grant Risk - Blog - {post.title}</title>
                <meta name="description" content={post.description}/>
            </Head>
            <main>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </main>
        </NavContainer>
    );
}

export async function getStaticPaths() {
    const posts = await getAllPosts();
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = await getPostBySlug(params.slug);
    return {
        props: { post },
    };
}
