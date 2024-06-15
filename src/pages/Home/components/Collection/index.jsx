import * as Styled from "./styles";
import { Card } from "../Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation'

export const Collection = ({ title }) => {
  const windowWidth = window.innerWidth;
  return (
    <Styled.CollectionContainer>
      <h2>{title}</h2>
        <Styled.CardContainer>
          <Card
            name={"Harry Potter e a Pedra Filosofal"}
            author={"J.K. Rowling"}
            img_source={
              "https://bookcover.pt/wp-content/uploads/2023/05/9789899126326-250x333.jpg.webp"
            }
          />
          <Card
            name={"TESTE"}
            author={"Teste"}
            img_source={
              "https://bookcover.pt/wp-content/uploads/2023/05/9789899126326-250x333.jpg.webp"
            }
          />
          <Card
            name={"TESTE"}
            author={"Teste"}
            img_source={
              "https://bookcover.pt/wp-content/uploads/2023/05/9789899126404-250x333.jpg.webp"
            }
          />
          <Card
            name={"TESTE"}
            author={"Teste"}
            img_source={
              "https://bookcover.pt/wp-content/uploads/2023/05/9789899126404-250x333.jpg.webp"
            }
          />
        </Styled.CardContainer>
    </Styled.CollectionContainer>
  );
};
