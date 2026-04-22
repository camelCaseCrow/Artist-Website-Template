import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "@components/Blog/BlogDetails/BlogDetails.module.css";
import api from "@api/api";
import Spinner from "react-bootstrap/Spinner";
// import Button from "@components/Button/Button.tsx";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;


type Blog = {
  image: string;
  title: string;
  blog_text: string;
  date: string;
  slug: string;
};


const BlogDetails = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDelayedText, setShowDelayedText] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    getBlog();
  }, [slug]); // re-fetch if slug changes

  const getBlog = async () => {
    // to stop showing loading spinner so early
    const loadingTimeout = setTimeout(() => {
      setLoading(true);
      setShowDelayedText(true);
    }, 1000);

    try {
      const response = await api.get(`/api/blog_posts/${slug}`);
      setBlog(response.data);
      console.log(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      clearTimeout(loadingTimeout);
      setLoading(false);
      setShowDelayedText(false);
    }
  };

  if (loading)
    return (
      <div className={styles.center}>
        <Spinner />
      </div>
    );
  if (error)
    return (
      <div className={styles.center}>
        <div className={styles.text}>Error: {error}</div>
      </div>
    );
  if (!blog && showDelayedText)
    return (
      <div className={styles.center}>
        <p className={styles.text}>Blog not found!</p>
      </div>
    );
  if (!blog) return null;

  return (
    <section className={styles.grid_container}>
      <img
        className={styles.img}
        src={`${BASE_URL}${blog.image}`}
        alt={blog.title}
      />
      <div className={styles.positioning}>
        <div className={styles.text}>
          <p className={styles.title_text}>{blog.title}</p>
          <p>{blog.date}</p>
          <p>{blog.blog_text}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;

