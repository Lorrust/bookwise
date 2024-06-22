import * as Styled from "./styles";
import { Card } from "../Card";

import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// eslint-disable-next-line react/prop-types
export const Collection = ({ title }) => {
  return (
    <Styled.CollectionContainer>
      <h2>{title}</h2>
      <Styled.CardContainer>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={4}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Card
              name="Harry Potter e a Pedra Filosofal"
              author="J.K. Rowling"
              img_source="https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UF1000,1000_QL80_.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name="Auto da Barca do Inferno"
              author="Gil Vicente"
              img_source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgP5XJoJnY6Ov73duT68O_0fl3XEgQaNfXtw&s"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name="Lorrust e Brawlhalla: O Livro do Torneio"
              author="S.Lorrust"
              img_source="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6i3u.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name="Morona e o Reino de Pedra"
              author="M0rena Rosa"
              img_source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1r37A1vfgCvwvKJtH68TIBiPehu3hej74Eg&s"
            />
          </SwiperSlide>
        </Swiper>
      </Styled.CardContainer>
    </Styled.CollectionContainer>
  );
};
