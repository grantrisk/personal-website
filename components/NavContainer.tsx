import styles from "@/styles/Nav.module.css";
import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      className={cn(isActive ? styles.active : null, styles.NextLink)}
    >
      <span>{text}</span>
    </NextLink>
  );
}

export default function NavContainer(props) {
  const [, setMounted] = useState(false);

  // After mounting, we have access to the theme
  // We are using this to prevent the initial flash of content that is not styled
  useEffect(() => setMounted(true), []);

  const { children } = props;

  return (
    <>
      <nav className={styles.nav}>
        <NavItem href="/" text="Home" />
        <NavItem href="/blog" text="Blog" />
        <NavItem href="/projects" text="Projects" />
      </nav>
      <>{children}</>
    </>
  );
}
