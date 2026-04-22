import styles from "./ContactForm.module.css";
import api from "@api/api";
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await api.post(`/api/submit_contact_form/`, formData);
      alert("Form Submitted");
      setFormData({ name: "", subject: "", email: "", message: "" });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error submitting form:", error);
        console.error(error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }

      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <section className={styles.contact}>
      <form onSubmit={handleSubmit}>
        {/* <h2>Contact Form</h2> */}
        <div className={styles.input_box}>
          <label className={styles.header}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.field}
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div className={styles.input_box}>
          <label className={styles.header}>Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className={styles.field}
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />
        </div>
        <div className={styles.input_box}>
          <label className={styles.label}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.field}
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.input_box}>
          <label className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`${styles.field_message} ${styles.field}`}
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default Contact;
