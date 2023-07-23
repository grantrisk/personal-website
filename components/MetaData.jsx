import Head from "next/head";
import styles from "@/styles/MetaData.module.css";

export default function MetaData() {
    return (
        <Head>
            <title className={styles.title}>Grant Risk - Home</title>
            <meta
                name="description"
                content="This is my personal website where I share my thoughts, projects, and YouTube videos."
            />
            <meta name="og:title" content="Grant Risk - Home"/>
            <meta
                name="og:description"
                content="This is my personal website where I share my thoughts, projects, work experience, and YouTube videos."
            />
            <meta name="og:image" content="/static/images/grant-pose.png"/>
            <meta
                name="og:url"
                content="https://personal-website-chi-black.vercel.app/"
            />
        </Head>
    );
}
