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

export default function Container(props) {
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  // We are using this to prevent the initial flash of unstyled content
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;

  return (
    <>
      <nav className={styles.nav}>
        <NavItem href="/" text="Home" />
        <NavItem href="/experiences" text="Experiences" />
        <NavItem href="/tutoring" text="Tutoring" />
        <NavItem href="/youtube" text="YouTube" />
        <NavItem href="/blog" text="Blog" />
      </nav>
      <>{children}</>
    </>
  );
}
