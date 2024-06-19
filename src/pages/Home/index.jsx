import { InvolvesPages } from "../../components/layout/InvolvesPages";
import { GeneralSearch } from "./components/GeneralSearch";
import { Collection } from "./components/Collection";
import { NotesCollection } from "./components/NotesCollection";

import * as Styled from "./styles";
import { BookInfo } from "./components/BookInfo";
export const Home = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  return (
    <InvolvesPages title={`Bem vindo ${loggedUser.name}`}>
      <Styled.Line>
        <BookInfo title="Cadastre um novo livro" />

        <GeneralSearch />
      </Styled.Line>

      <Styled.Container>
        <Styled.CardContainer>
          <Collection title="Recentemente adicionados" />
          <Collection title="Favoritos" />
        </Styled.CardContainer>

        <NotesCollection />
      </Styled.Container>
    </InvolvesPages>
  );
};
