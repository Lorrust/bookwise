import { useState } from "react";
import "./styles";
import { Container, StyledDialogContent, StyledDialogOverlay } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

export const BookInfo = ({ addCard }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCard(title, author, imageUrl);
    setTitle("");
    setAuthor("");
    setImageUrl("");
  };

  return (
    <Container>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button id="Adicionar">+</button>
        </Dialog.Trigger>
        <StyledDialogOverlay />
        <StyledDialogContent>
          <div className="bookinfo">
            <h1>{addCard}</h1>
            <form onSubmit={handleSubmit}>
              <label>Título:</label>
              <br />
              <input type="text" value={title} onChange={handleTitleChange} />
              <br />
              <label>Autor:</label>
              <br />
              <input type="text" value={author} onChange={handleAuthorChange} />
              <br />
              <label>URL da Imagem:</label>
              <br />
              <input
                type="url"
                value={imageUrl}
                onChange={handleImageUrlChange}
              />
              <br />
              {imageUrl && <img src={imageUrl} alt="Book Cover" />}
              <br />
              <div>
                <button type="submit">Confirmar</button>
                <Dialog.Close asChild>
                  <button>Cancelar</button>
                </Dialog.Close>
              </div>
            </form>
          </div>
        </StyledDialogContent>
      </Dialog.Root>
    </Container>
  );
};
