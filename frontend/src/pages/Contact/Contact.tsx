import PageText from "../../components/Text/PageTextContact/PageTextContact";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div>
      <PageText heading="Contact" />
      <section className={styles.section}>
        <ContactForm />
      </section>
    </div>
  );
}

export default Contact;
