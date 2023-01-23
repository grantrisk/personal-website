import Container from "@/components/Container";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import grantPose from "@/static/images/grant-pose.png"
import githubSVG from "@/static/svgs/github.svg"
import githubBlackSVG from "@/static/svgs/github-black.svg"
import linkedinSVG from "@/static/svgs/linkedin.svg"





export default function Home() {

  return (
    <Container>
      <Head>
        <title>Grant Risk - Home</title>
        <meta name="description" content="This is my personal website where I share my thoughts, projects, and YouTube videos." />
      </Head>
      <main className={styles.main}>
        <section className={`${styles.sideBySide}  ${styles.section} ${styles.sectionHeader}`}>
          <aside>
            <h1>Grant Risk</h1>
            <h3>
              Software Engineer at{" "}
              <a
                className={styles.a}
                href="https://www.ohanafy.com"
                target="_blank"
                rel="noreferrer"
              >
                Ohanafy
              </a>
            </h3>
            <br />
            <p>
              I&apos;m a software engineer based in the United States... still
              learning how to code.
            </p>
          </aside>
          <Image className={styles.avatar} src={grantPose} alt="Grant Risk" width={800} height={1066}/>
        </section>
        
        {/* TODO: 
              - make svg icons change based on system color scheme
              - convert clickable svg icons to react components
          */}
        <section className={styles.sideBySide}>
          <a className={styles.links} href="https://github.com/grantrisk" target="_blank" rel="noreferrer">
            <Image src={githubSVG} alt="GitHub"></Image>
            GitHub
          </a>
          <a className={styles.links} href="https://www.linkedin.com/in/grantrisk/" target="_blank" rel="noreferrer">
            <Image src={linkedinSVG} alt="LinkedIn"></Image>
            LinkedIn
          </a>
        </section>

        <br />
        <hr />
        <br />
        
        <section className={styles.section}>
          <h2>Projects</h2>
          <h2>Projects</h2>
          <h2>Projects</h2>

        </section>
      </main>
    </Container>
  );
}
