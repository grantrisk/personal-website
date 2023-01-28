import Container from "@/components/Container";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import grantPose from "@/static/images/grant-pose.png";
import githubSVG from "@/static/svgs/github.svg";
import githubBlackSVG from "@/static/svgs/github-black.svg";
import linkedinSVG from "@/static/svgs/linkedin.svg";
import GradualColor from "../components/GradualColor";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Grant Risk - Home</title>
        <meta
          name="description"
          content="This is my personal website where I share my thoughts, projects, and YouTube videos."
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
              I&apos;m a software engineer based in the United States... still
              learning how to code.
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

        {/* TODO: 
              - make svg icons change based on system color scheme
              - convert clickable svg icons to react components
          */}
        <section className={styles.sideBySide}>
          <a
            className={styles.links}
            href="https://github.com/grantrisk"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={githubSVG} alt="GitHub"></Image>
            GitHub
          </a>
          <a
            className={styles.links}
            href="https://www.linkedin.com/in/grantrisk/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={linkedinSVG} alt="LinkedIn"></Image>
            LinkedIn
          </a>
        </section>

        <br />
        <hr />
        <br />

        <section className={styles.section}>
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
        <br />

        <section className={styles.section}>
          <h2>About</h2>
          <br />
          <p>
            My name is Grant Risk and I am a software engineer at Ohanafy, a
            software brewery company based in Wilmington, North Carolina. I am
            passionate about creating innovative and user-friendly software that
            makes a difference in people&apos;s lives. I have a strong
            background in software development and I graduated from the
            University of North Carolina Wilmington in December 2022. I am
            excited to be working at Ohanafy, where I am able to collaborate
            with a talented team of engineers and developers to create
            cutting-edge software. In my free time, I enjoy staying up-to-date
            with the latest technology trends, as well as exploring the
            beautiful beaches and outdoor spaces of Wilmington. I hope you enjoy
            exploring my website and learning more about me and my professional
            journey.
          </p>
          <br></br>
        </section>

        <br />
        <hr />
        <br />

        <section className={styles.section}>
          <h2>Resume</h2>
          <br />
          <p>
            As a software engineer with 2 years of experience, I am excited to
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
          <a
            className={styles.resume}
            href="../static/documents/Resume.pdf"
            target="_blank"
          >
            View Resume
          </a>
        </section>
        {/* <br />
        <br />
        <footer className={styles.footer}>
          <p>Copyright © Grant Risk 2023</p>
          <p>
            Contact: <a href="mailto:riskgrant@gmail.com">riskgrant@gmail.com</a> |{" "}
            <a href="tel:+1234567890">(123) 456-7890</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/grantrisk">LinkedIn</a> |
            <a href="https://github.com/grantrisk">GitHub</a> |
          </p>
        </footer> */}
      </main>
    </Container>
  );
}
