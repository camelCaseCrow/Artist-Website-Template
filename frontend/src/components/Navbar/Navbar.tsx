import styles from "./Navbar.module.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { type ReactNode } from "react";

interface Props {
  to: string;
  children: ReactNode;
}

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={`${styles.site_title} ${styles.nav_a}`}>
        Artist Name
      </Link>
      <ul
        className={`${styles.nav_links} ${styles.nav_hover} ${styles.nav_active}`}
      >
        <CustomLink to="/">WORK</CustomLink>
        <CustomLink to="/about">ABOUT</CustomLink>
        <CustomLink to="/blog">BLOG</CustomLink>
        <CustomLink to="/contact">CONTACT</CustomLink>
      </ul>
    </nav>
  );
}

export default Navbar;

function CustomLink({to, children} : Props) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true}) // end: true, match only if url is exact (like path === href)

  return (
    <li className={isActive ? styles.nav_active : ""}>
      <Link to={to} className={styles.nav_a}>
        {children}
      </Link>
    </li>
  );
}
