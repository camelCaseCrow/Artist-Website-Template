import PageText from "../../components/Text/PageText/PageText";
import ArtworkList from "@components/Artwork/ArtworkList/ArtworkList";

function Drawings() {
  return (
    <div>
      <PageText heading="Drawings" />
      <ArtworkList category="drawings"/>
    </div>
  );
}

export default Drawings;
