import Container from "@/components/Container";
import styles from '@/styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
    return (
      <Container>
        <Head>
          <title>Grant Risk - Blog</title>
          <meta name="description" content="This is my personal website where I share my thoughts in the form of blogs." />
        </Head>
        <main className={styles.main}>
          <h1>Grant Risk&apos;s Blog</h1>
        </main>
      </Container>
    )
  }