import React, { useState } from "react";
import "./styles";
import { Container, StyledDialogContent, StyledDialogOverlay } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

export const BookInfo = ({ pageName }) => {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
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
            <h1>{pageName}</h1>
            <form>
              <label>Title:</label>
              <br />
              <input type="text" placeholder="Title" /> <br />
              <label>Author:</label>
              <br />
              <input type="text" placeholder="Author" />
              <br />
              <label>Publisher:</label>
              <br />
              <input type="text" placeholder="Publisher" />
              <br />
              <label>Type image URL:</label>
              <br />
              <input type="url" value={imageUrl} onChange={handleImageUrlChange} />
              <br />
              {imageUrl && <img src={imageUrl} alt="Book Cover" />}
              <br />
              <div>
                <button type="submit">Confirm</button>
                <Dialog.Close asChild>
                  <button>Cancel</button>
                </Dialog.Close>
              </div>
            </form>
          </div>
        </StyledDialogContent>
      </Dialog.Root>
    </Container>
  );
};
