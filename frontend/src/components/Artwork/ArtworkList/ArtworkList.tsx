import { useEffect, useState } from "react"; // useEffect is called every time application is rendered, second parameter makes useEffect called every time it changes
import { Link } from "react-router-dom";
import styles from "@components/Artwork/ArtworkList/ArtworkList.module.css";
import api from "@api/api";
import Spinner from "react-bootstrap/Spinner";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface Props {
  category: string;
}

type Artwork = {
  image: string;
  title: string;
  slug: string;
};

const ArtworkList = ({ category }: Props) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // api call to fetch data
  useEffect(() => {
    getArtworks();
  }, []);

  const getArtworks = async () => {
    // to stop showing loading spinner so early
    const loadingTimeout = setTimeout(() => {
      setLoading(true);
    }, 1000);

    try {
      const response = await api.get(`/api/${category}/`);
      setArtworks(response.data);

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
        {artworks.map((artwork) => (
          <div key={artwork.slug} className={styles.card}>
            <Link to={`/${category}/${artwork.slug}`}>
              <img className={styles.img} src={`${BASE_URL}${artwork.image}`} />
            </Link>
            <div className={styles.text_positioning}>
              <p className={styles.title_text}>{artwork.title}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ArtworkList;

