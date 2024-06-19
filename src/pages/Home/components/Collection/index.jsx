import * as Styled from "./styles";
import { Card } from "../Card";
import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// eslint-disable-next-line react/prop-types
export const Collection = ({ title }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const placeholderCards = [
      {
        title: "The Test",
        author: "Author X",
        imageUrl: "https://picsum.photos/200/300",
      },
      {
        title: "Why We Sleep",
        author: "Author Y",
        imageUrl: "https://picsum.photos/200/300",
      },
      {
        title: "Whooosh",
        author: "Sheeeesh",
        imageUrl: "https://picsum.photos/200/300",
      },
    ];
    setCards(placeholderCards);
  }, []);

  return (
    <Styled.CollectionContainer>
      <h2>{title}</h2>
      <Styled.CardContainer>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            author={card.author}
            imageUrl={card.imageUrl}
          />
        ))}
      </Styled.CardContainer>
    </Styled.CollectionContainer>
  );
};
