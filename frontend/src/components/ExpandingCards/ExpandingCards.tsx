import { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./ExpandingCards.module.css";

interface Props {
  cards: { image: string; subheading: string; link:string }[];
}

function ExpandingCards({ cards }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1); // for image that is hovered over

  return (
    <section className={Styles.section}>
      {cards.map((card, index) => (
        <div key = {index} className={Styles.card}>
          <Link to={card.link}>
          <img
            
            // checking which image is being hovered over
            onMouseEnter={() => {
              setSelectedIndex(index);
            }}
            onMouseLeave={() => {
              setSelectedIndex(-1);
            }}
            className={
              index % 2
                ? Styles.img
                : `${Styles.img} ${Styles.img_position_odd}` // if index is even, just use regular positioning, otherwise position slightly down
               
            }
            src={card.image}
            
          />
          </Link>
          
          {/* if hovering over specific image then only show the text */}
          <p
              className={`${
              // subheading visibilty toggle
              selectedIndex === index
                ? Styles.subheading_active
                : Styles.subheading_not_active
            }   
                // subheading positioning
                ${index % 2 ? "" : Styles.subheading_position_odd}
                `}
            >
              {card.subheading}
            </p>

        </div>
      ))}
    </section>
  );
}

export default ExpandingCards;


// key = {card}