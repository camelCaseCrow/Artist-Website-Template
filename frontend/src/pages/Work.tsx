import ExpandingCards from "../components/ExpandingCards/ExpandingCards";

const placeholderImage1 = "https://generative-placeholders.stefanbohacek.com/image?width=600&height=300&style=triangles&gap=25&img=01&colors=20"
const placeholderImage2 = "https://generative-placeholders.stefanbohacek.com/image?width=600&height=300&style=triangles&gap=30img=02&colors=20"
const placeholderImage3 = "https://generative-placeholders.stefanbohacek.com/image?width=600&height=300&style=triangles&gap=40img=03&colors=20"
const placeholderImage4 = "https://generative-placeholders.stefanbohacek.com/image?width=600&height=300&style=triangles&gap=30img=04&colors=20"
const placeholderImage5 = "https://generative-placeholders.stefanbohacek.com/image?width=600&height=300&style=triangles&gap=25img=05&colors=20"

function Work() {
  let cards = [
    { image: placeholderImage1, subheading: "Paintings", link: "/paintings" },
    { image: placeholderImage2, subheading: "Drawings", link: "/drawings" }, 
    { image: placeholderImage3, subheading: "Placeholder", link: "/not-found" },  // **
    {
      image: placeholderImage4,
      subheading: "Videos",
      link: "https://www.youtube.com/",
    },
    {
      image: placeholderImage5,
      subheading: "Shop",
      link: "https://www.saatchiart.com/en-gb",
    },
  ];
  return <ExpandingCards cards={cards} />;
}

export default Work;
