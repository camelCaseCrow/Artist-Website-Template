import styles from "./Footer.module.css";
import SocialMediaIcons from "../IconLinks/SocialMediaIcons";

function Footer() {
  return (
    <section className = {styles.footer}>
      <div className={styles.icons_position}>
        <SocialMediaIcons />
      </div>
    </section>
  );
}

export default Footer;


