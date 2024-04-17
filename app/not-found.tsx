import Link from 'next/link'
import Head from "next/head";
import styles from "@/styles/404.module.css";

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 Error</title>
                <meta name="description" content="404 error page." />
            </Head>
            <main className={styles.main}>
                <h1>404 Error</h1>
                <br />
                <h3>
                    Oops... I have no idea where you were trying to go but it ain&apos;t
                    here :/
                </h3>
                <h3>Here is a handy dandy button to get you back!</h3>
                <br />
                <Link href="/">
                    <button className={styles.button}>Home</button>
                </Link>
                <br />
                <p>☝️</p>
            </main>
        </>
    )
}