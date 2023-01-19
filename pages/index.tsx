import Container from '@/components/Container'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Grant Risk - Home</title>
      </Head>
      <main className={styles.main}>
        <h1>Grant Risk</h1>
      </main>
    </Container>
  )
}
