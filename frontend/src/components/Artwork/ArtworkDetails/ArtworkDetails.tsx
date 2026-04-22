import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "@components/Artwork/ArtworkDetails/ArtworkDetails.module.css";
import Button from "@components/Button/Button.tsx";
import api from "@api/api";
import Spinner from "react-bootstrap/Spinner";
// import Payment from "@components/Payment/Payment";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface Props {
  category: string;
}

type Artwork = {
  image: string;
  title: string;
  price: string;
  year_of_creation: string;
  medium_display: string;
  custom_medium: string;
  material_display: string;
  custom_material: string;
  style_display: string;
  custom_style : string;
  width_cm: string;
  height_cm: string;
  depth_cm: string;
  width_in: string;
  height_in: string;
  depth_in: string;
  slug: string;
  artwork_description: string;
};

const ArtworkDetails = ({ category }: Props) => {
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDelayedText, setShowDelayedText] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    getArtwork();
  }, [slug]); // re-fetch if slug changes

  const getArtwork = async () => {
    // to stop showing loading spinner so early
    const loadingTimeout = setTimeout(() => {
      setLoading(true);
      setShowDelayedText(true);
    }, 1000);

    try {
      const response = await api.get(`/api/${category}/${slug}/`);
      setArtwork(response.data);
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
  if (!artwork && showDelayedText)
    return (
      <div className={styles.center}>
        <p className={styles.text}>Artwork not found!</p>
      </div>
    );
  if (!artwork) return null;

  return (
    <section className={styles.grid_container}>
      <img
        className={styles.img}
        src={`${BASE_URL}${artwork.image}`}
        alt={artwork.title}
      />
      <div className={styles.positioning}>
        <div className={styles.text}>
          <p className={styles.title_text}>{artwork.title}</p> 
          <p className={styles.price_text}>£{artwork.price}</p>
          {/* <p>{artwork.custom_style == ""
              ? artwork.style_display
              : artwork.custom_style}</p> */}
          <p>
            {artwork.custom_medium == ""
              ? artwork.medium_display
              : artwork.custom_medium}{" "}
            on {" "}
            {artwork.custom_material == ""
              ? artwork.material_display
              : artwork.custom_material}
          </p>
          <p>
            {artwork.height_cm} cm x {artwork.width_cm} cm{" "}
            {artwork.depth_cm == null ? "" : `x ${artwork.depth_cm} cm`}
          </p>
          <p>
            {artwork.height_in} in x {artwork.width_in} in{" "}
            {artwork.depth_in == null ? "" : `x ${artwork.depth_in} in`}
          </p>
        </div>
        <Button colour="dark_grey" onClick={() => {}}>
          BUY NOW
        </Button>
        <Button colour="light_grey" onClick={() => {}}>
          ENQUIRE
        </Button>
      </div>
    </section>
  );
};

export default ArtworkDetails;

/* <PayPalScriptProvider
          options={{
            "clientId": import.meta.env.VITE_PAYPAL_CLIENT_ID,
            // currency: "GBP",
            // intent: "capture",
            // currency: "USD",
          }}
        >
          <Payment
            buy_button={
              <Button colour="dark_grey" onClick={() => {}}>
                BUY NOW
              </Button>
            }
            price = {artwork.price}
          />
          </PayPalScriptProvider> */
