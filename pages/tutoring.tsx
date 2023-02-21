import Container from "@/components/Container";
import styles from "@/styles/Blog.module.css";
import Head from "next/head";
import Image from "next/image";
import outOfOrder from "@/static/images/out-of-order.png";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Grant Risk - Blog</title>
        <meta
          name="description"
          content="A page to explain my tutoring services."
        />
      </Head>
      <main className={styles.main}>
        <Image
          className={styles.outOfOrder}
          src={outOfOrder}
          alt="Out Of Order Sign"
          width={416}
          height={416}
        />
      </main>
    </Container>
  );
}
