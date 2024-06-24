import React from "react";
import { useLocation } from "react-router-dom";
import { InvolvesPages } from "../../components/layout/InvolvesPages";
import { Card } from "../Home/components/Card";
import { useBookValue } from "../../contexts/BooksContext";
import * as Styled from "./styles";

export const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");
  const { books } = useBookValue();

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <InvolvesPages title="Resultados da pesquisa">
      <Styled.Div>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Card
              name={book.name}
              author={book.author}
              img_source={book.img_source}
            />
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </Styled.Div>
    </InvolvesPages>
  );
};
