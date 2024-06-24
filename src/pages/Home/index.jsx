import { InvolvesPages } from "../../components/layout/InvolvesPages";
import { GeneralSearch } from "./components/GeneralSearch";
import { Collection } from "./components/Collection";
import { NotesCollection } from "./components/NotesCollection";
import { BookInfo } from "./components/BookInfo";

import { useCategoriesValue } from "../../contexts/CategoriesContext";

import * as Styled from "./styles";

export const Home = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const { categories } = useCategoriesValue()

  return (
    <InvolvesPages title={`Bem vindo, ${loggedUser.name}`}>
      <Styled.Line>
        <BookInfo title="Novo Livro" />

        <GeneralSearch />
      </Styled.Line>

      <Styled.Container>
        <Styled.CardContainer>
          { categories.length &&
            (
              categories.map((category) => {
                return <Collection key={category.id} title={category.name} items={category.items} />
              })
            )
          }

        </Styled.CardContainer>

        <NotesCollection />
      </Styled.Container>
    </InvolvesPages>
  );
};
