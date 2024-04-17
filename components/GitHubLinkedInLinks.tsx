import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "@/styles/GitHubLinkedInLinks.module.css";

export default function GitHubLinkedInLinks() {
  return (
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
  );
}
