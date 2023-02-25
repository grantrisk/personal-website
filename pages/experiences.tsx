import Container from "@/components/Container";
import styles from "@/styles/Experience.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Grant Risk - Experiences</title>
        <meta
          name="description"
          content="A page to explain my work experiences."
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Experiences</h1>
        <div className={styles.experience}>
          <div>
            <h2>nCino - Software Engineer Intern</h2>
            <p>
              I worked in CPP (Commercial Pricing and Profitability). We built
              on the AWS platform for financial institutions to price commercial
              loans and calculate their profitability.{" "}
            </p>
          </div>
          <Image
            src="/static/images/ncino-logo.png"
            alt="nCino Logo"
            width={400}
            height={200}
          />
        </div>
        <div className={styles.experience}>
          <div>
            <h2>Ohanafy - Software Engineer</h2>
            <p>
              I worked in CPP (Commercial Pricing and Profitability). We built
              on the AWS platform for financial institutions to price commercial
              loans and calculate their profitability.{" "}
            </p>
          </div>
          <Image
            src="/static/images/ohanafy-logo.png"
            alt="nCino Logo"
            width={400}
            height={200}
          />
        </div>
      </main>
    </Container>
  );
}
