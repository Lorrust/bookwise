import { Container } from "./styles";
import { PrimaryButton } from "../../../../components/button/PrimaryButton";
import { PrimaryInput } from "../../../../components/form/PrimaryInput";

export const GeneralSearch = () => {
  return (
    <Container>
        <PrimaryInput
            type="text"
            name="search"
            id="search"
            placeholder="Procurar por livros ou anotações"
        />

        <PrimaryButton>Pesquisar</PrimaryButton>
    </Container>
  );
};
