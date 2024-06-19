import { InvolvesPages } from "../../components/layout/InvolvesPages";
import { GeneralSearch } from "./components/GeneralSearch";
import { Collection } from "./components/Collection";
import { NotesCollection } from "./components/NotesCollection";

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
          <Collection title="Recentemente adicionados" />
        </Styled.CardContainer>

        <NotesCollection />
      </Styled.Container>
    </InvolvesPages>
  );
};
