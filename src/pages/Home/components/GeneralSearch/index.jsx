import { Container } from "./styles";
import { PrimaryButton } from "../../../../components/button";
import { PrimaryInput } from "../../../../components/form/PrimaryInput";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const GeneralSearch = () => {
  return (
    <Container>
        <PrimaryInput
            type="text"
            name="search"
            id="search"
            placeholder="Procurar por livros ou anotações"
        />

        <PrimaryButton>
          <MagnifyingGlassIcon />
          <span>Pesquisar</span> 
        </PrimaryButton>
    </Container>
  );
};
