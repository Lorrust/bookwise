import * as Styled from "./styles";
import { Card } from "../Card";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// eslint-disable-next-line react/prop-types
export const Collection = ({ title }) => {
  // const slides = [
  //   {
  //     id: 1,
  //     name: "Card 1",
  //     author: "Description 1",
  //     img_source:
  //       "https://bookcover.pt/wp-content/uploads/2023/05/9789899126404-250x333.jpg.webp",
  //   },
  //   {
  //     id: 2,
  //     name: "Card 2",
  //     author: "Description 2",
  //     img_source:
  //       "https://bookcover.pt/wp-content/uploads/2023/05/9789899126404-250x333.jpg.webp",
  //   },
  //   {
  //     id: 3,
  //     name: "Card 3",
  //     author: "Description 3",
  //     img_source:
  //       "https://bookcover.pt/wp-content/uploads/2023/05/9789899126404-250x333.jpg.webp",
  //   },
  //   {
  //     id: 4,
  //     name: "Card 4",
  //     author: "Description 4",
  //     img_source:
  //       "https://bookcover.pt/wp-content/uploads/2023/05/9789899126404-250x333.jpg.webp",
  //   },
  // ];

  return (
    <Styled.CollectionContainer>
      <h2>{title}</h2>
      <Styled.CardContainer>
        <Card 
          name="Harry Potter e a Pedra Filosofal"
          author="J.K. Rowling"
          img_source="https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UF1000,1000_QL80_.jpg"
        />
        <Card 
          name="Auto da Barca do Inferno"
          author="Gil Vicente"
          img_source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgP5XJoJnY6Ov73duT68O_0fl3XEgQaNfXtw&s"
        />
        <Card 
          name="Lorrust e Brawlhalla: O Livro do Torneio"
          author="S.Lorrust"
          img_source="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6i3u.jpg"
        />
        <Card  
          name="Morona e o Reino de Pedra"
          author="M0rena Rosa"
          img_source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1r37A1vfgCvwvKJtH68TIBiPehu3hej74Eg&s"
        />
        {/* <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          slidesPerView={window.innerWidth < 500 ? 1 : 4}
          spaceBetween={50}
          pagination={true}
          navigation={true}
          scrollbar={{ draggable: true }}
          onScroll={(event) => {
            event.stopPropagation();
          }}
          effect="coverflow"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Card
                name={slide.name}
                author={slide.author}
                img_source={slide.img_source}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </Styled.CardContainer>
    </Styled.CollectionContainer>
  );
};
