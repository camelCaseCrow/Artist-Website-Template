import styles from "./IconLinks.module.css";
import { Link } from "react-router-dom";

interface Props {
  icons: { image: string; link: string }[];
}

function IconLinks({ icons }: Props) {
  return (
    <section className={styles.section}>
      {icons.map((icon, index) => (
        <Link key={index} to={icon.link}>
          <img loading="lazy" src={icon.image} className={styles.img} />
        </Link>
      ))}
    </section>
  );
}

export default IconLinks;
