import { InvolvesPages } from "../../components/layout/InvolvesPages";
import { GeneralSearch } from "./components/GeneralSearch";
import { Collection } from "./components/Collection";
import { NotesCollection } from "./components/NotesCollection";
import { BookInfo } from "./components/BookInfo";
import * as Styled from "./styles";
export const Home = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  return (
    <InvolvesPages title={`Bem vindo ${loggedUser.name}`}>
      <GeneralSearch />

      <Styled.Container>
        <Styled.CardContainer>
          <Collection title="Recomendações" />
          <Collection title="Favoritos" />
          <Styled.AddbookContainer>
            <Collection title="Recentemente adicionados" />
            <BookInfo pageName="Adicionar um novo livro"></BookInfo>
          </Styled.AddbookContainer>
        </Styled.CardContainer>

        <NotesCollection />
      </Styled.Container>
    </InvolvesPages>
  );
};
