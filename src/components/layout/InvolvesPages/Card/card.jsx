import { PrimaryButton } from "../../../button/PrimaryButton";
import { Container } from "./styles";
export const Card = ({ name, author, company }) => {
  return (
    <Container>
      <div className="card">
          <img
            src=""
            alt="Capa do livro"
          />
        <h2>{name}</h2>
        <p>{author}</p>
        <p>{company}</p>
        <PrimaryButton $size={0.7}>Ver Livro</PrimaryButton>
      </div>
    </Container>
  );
};
