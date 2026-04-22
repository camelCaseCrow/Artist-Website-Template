import { useEffect, useState } from "react"; // useEffect is called every time application is rendered, second parameter makes useEffect called every time it changes
import { Link } from "react-router-dom";
import styles from "@components/Blog/BlogList/BlogList.module.css";
import api from "@api/api";
import Spinner from "react-bootstrap/Spinner";
/* *** FIX FORMATTING */
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

type Blog = {
  image: string;
  title: string;
  date: string;
  slug: string;
};

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // api call to fetch data
  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    // to stop showing loading spinner so early
    const loadingTimeout = setTimeout(() => {
      setLoading(true);
    }, 1000);

    try {
      const response = await api.get(`/api/blog_posts/`);
      setBlogs(response.data);

      console.log(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      clearTimeout(loadingTimeout);
      setLoading(false);
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

  return (
    <div className={styles.body}>
    
      <section className={styles.grid_container}>
      {blogs.map((blog, index) => (
        <div key={blog.slug} 
        className={
          `${(index) % 3 == 0 && styles.col_first} // 1st, 4th, 7th.. card       [1st card] [2nd card]
          ${(index - 1) % 3 == 0 && styles.col_second} // 2nd, 5th, 8th.. card         [3rd card]
          ${(index - 2) % 3 == 0 && styles.col_third} // 3rd, 6th, 9th.. card   [4th card] [5th card] etc.
          ${styles.col_style}`
        }>
          <Link to={`/blog/${blog.slug}`}>
              <img className={styles.img} src={`${BASE_URL}${blog.image}`} />
            </Link>
          <div className={styles.text_positioning}>
            <p>{blog.title}</p>
            <p>{blog.date}</p>
          </div>
        </div>
      ))}
    </section>
    </div>
    
  );
};

export default BlogList;