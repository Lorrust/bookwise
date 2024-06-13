import "./styles"
import { Container } from "./styles";
export const SearchFilter = () => {
  return (
    <Container>
      <div className="search-filter">
        <input type="text" placeholder="Procurar por livros ou anotações..." />
        <select>
          <option value="1">Filtros</option>
        </select>
      </div>
    </Container>
  );
};
