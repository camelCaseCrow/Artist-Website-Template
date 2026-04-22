import PageText from "../../components/Text/PageText/PageText";
import ArtworkList from "@components/Artwork/ArtworkList/ArtworkList";


function Paintings() {
  return (
    <div>
      <PageText heading="Paintings" />
      <ArtworkList category="paintings"/>
    </div>
  );
}

export default Paintings;
