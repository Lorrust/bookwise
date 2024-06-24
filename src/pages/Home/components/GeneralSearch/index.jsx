import { Container } from "./styles";
import { PrimaryButton } from "../../../../components/button";
import { PrimaryInput } from "../../../../components/form/PrimaryInput";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

export const GeneralSearch = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault()
      navigate(`/search?q=${e.target.query.value}`)
      
  }
  return (
    <Container onSubmit={handleSubmit}>
        <PrimaryInput
            type="text"
            name="query"
            id="query"
            placeholder="Procurar por livros ou anotações"
        />

        <PrimaryButton>
          <MagnifyingGlassIcon />
          <span>Pesquisar</span> 
        </PrimaryButton>
    </Container>
  );
};
