import IconLinks from "./IconLinks";
import saatchiIcon from "@assets/SocialMediaIcons/saatchi_art_icon.png";
import linkedinIcon from "@assets/SocialMediaIcons/linkedin_icon.png";
import instagramIcon from "@assets/SocialMediaIcons/instagram_icon.png";
import xIcon from "@assets/SocialMediaIcons/x_icon.png";

function SocialMediaIcons() {
  let icons = [
    { image: saatchiIcon, link: "https://www.saatchiart.com/en-gb" },
    {
      image: linkedinIcon,
      link: "https://www.linkedin.com/",
    },
    { image: instagramIcon, link: "https://www.instagram.com/?hl=en" },
    { image: xIcon, link: "https://x.com/" },
  ];
  return <IconLinks icons={icons} />;
}

export default SocialMediaIcons;
