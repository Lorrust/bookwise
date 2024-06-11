import { InvolvesPages } from "../../components/layout/InvolvesPages";

export const AddBook = () => {
  return (
    <InvolvesPages>
        <h2>Adicione um Livro</h2>
        <div>
          <label>Título:</label>
          <br />
          <input type="text" placeholder="Título" /> <br />
          <label>Autor:</label>
          <br />
          <input type="text" placeholder="Autor" />
          <br />
          <label>Editora:</label>
          <br />
          <input type="text" placeholder="Editora" />
          <br/>
          <label>Selecione uma imagem:</label>
          <br/>
          <input type="file"/> <br/>
          <button type="submit">Adicionar</button>
        </div>
    </InvolvesPages>
  );
};
