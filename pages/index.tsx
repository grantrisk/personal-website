import Container from "@/components/Container";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import grantPose from "@/static/images/grant-pose.png";
import GradualColor from "../components/GradualColor";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Grant Risk - Home</title>
        <meta
          name="description"
          content="This is my personal website where I share my thoughts, projects, and YouTube videos."
        />
        <meta name="og:title" content="Grant Risk - Home" />
        <meta
          name="og:description"
          content="This is my personal website where I share my thoughts, projects, work experience, and YouTube videos."
        />
        <meta name="og:image" content="/static/images/grant-pose.png" />
        <meta
          name="og:url"
          content="http://personal-website-chi-black.vercel.app/"
        />
      </Head>
      <main className={styles.main}>
        <section
          className={`${styles.sideBySide}  ${styles.section} ${styles.sectionHeader}`}
        >
          <aside>
            <GradualColor>Grant Risk</GradualColor>
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
              I&apos;m a software engineer based in the United States... scraping together enough documentation to explain to my parents what I actually do for a living..
            </p>
          </aside>
          <Image
            className={styles.avatar}
            src={grantPose}
            alt="Grant Risk"
            width={800}
            height={1066}
          />
        </section>
        <section className={styles.sideBySide}>
          <a
            className={styles.links}
            href="https://github.com/grantrisk"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            className={styles.links}
            href="https://www.linkedin.com/in/grantrisk/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </section>

        <br />
        <hr />
        <br />

        {/* <section className={styles.section}>
          <h2>Projects</h2>
          <br />
          <p>
            Welcome to my personal website! I am excited to share my GitHub
            coding projects with you. By clicking on the GitHub link above, you
            will be able to view a variety of projects that I have created and
            contributed to. From web development to machine learning, I am
            constantly pushing myself to learn new technologies and techniques.
            I hope you enjoy exploring my work and please don&apos;t hesitate to
            reach out if you have any questions or comments.
          </p>
          <br />
        </section>

        <br />
        <hr />
        <br /> */}

        <section className={styles.section}>
          <h2>About</h2>
          <br />
          <p>
            Hello! My name is Grant Risk and I am a software engineer currently
            working at Ohanafy, a software brewery company based in Wilmington,
            North Carolina. I spend a lot of my free time trying to automate
            boring tasks and learning new technologies. I love to learn and to
            help others learn. I have been apart of non-profit organizations and
            local meetups to help others learn how to code. If you interested in
            anything software related, please reach out to me. I would love to
            nerd talk with you!
          </p>
          <br></br>
        </section>

        <br />
        <hr />
        <br />

        <section className={styles.section}>
          <h2>Resume / Degree</h2>
          <br />
          <p>
            As a software engineer with ~2 years of experience, I am excited to
            showcase my professional accomplishments and qualifications. My
            strong technical skills and ability to work well in a team have
            allowed me to excel in various projects and roles throughout my
            career. I am always looking for new challenges and opportunities to
            grow as an engineer and make an impact in the industry.
          </p>
          <br />
          <p>
            In my resume section, you can view a detailed overview of my
            education, work experience, skills, and projects. I have included a
            link for your convenience to view my resume and learn more about my
            qualifications and experience. I invite you to take a look and
            discover how my skills and experience align with your needs.
          </p>
          <br />
          <br />
          <div className={styles.persoanlLinks}>
            <a
              className={styles.resume}
              href="../static/documents/Resume.pdf"
              target="_blank"
            >
              View Resume
            </a>
            <a
              className={styles.resume}
              href="https://mandrillapp.com/track/click/30717337/www.parchment.com?p=eyJzIjoidkFLbEdHcE1xZWZCVTNWVDFxT29Id01SVEpZIiwidiI6MSwicCI6IntcInVcIjozMDcxNzMzNyxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL3d3dy5wYXJjaG1lbnQuY29tXFxcL3VcXFwvc1xcXC9nd0N3XCIsXCJpZFwiOlwiZWUxMzczZGRhMTA1NGNkMmEwZjI0ZTY1N2E2NGE4M2NcIixcInVybF9pZHNcIjpbXCIyNTc5ODMzYzE0MzVhMDE5YzdmNzhiMzdjNzhiOTc5ODNmOWRiZWRhXCJdfSJ9"
              target="_blank"
              rel="noreferrer"
            >
              View Degree
            </a>
          </div>
        </section>
      </main>
    </Container>
  );
}
