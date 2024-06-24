import { Card } from "../Card";
import { useBookValue } from "../../../../contexts/BooksContext";
import * as Styled from "./styles";

// eslint-disable-next-line react/prop-types
export const Collection = ({ title, items }) => {
  const { books } = useBookValue()

  return (
    <Styled.CollectionContainer>
      <h2>{title}</h2>
      <Styled.CardContainer>
        {items && items.map((idBook) => {
          const bookInfo = books.find((item) => item.id === idBook);
          return (
            <Card
              key={bookInfo.id}
              {...bookInfo}
            />
          );
        })}
      </Styled.CardContainer>
    </Styled.CollectionContainer>
  );
};
