import { useState } from "react";
import { PlusIcon } from "@radix-ui/react-icons";

import { Modal } from "../../../../components/modal";
import { PrimaryButton } from "../../../../components/button";
import { PrimaryInput } from "../../../../components/form/PrimaryInput";

import * as Styled from "./styles";

export const BookInfo = ({ title }) => {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  return (
    <Modal
      button={
        <PrimaryButton>
          <PlusIcon />
          <span>Cadastrar novo livro</span>
        </PrimaryButton>
      }
      title={title}
    >
      <Styled.Form>
        <PrimaryInput type="text" placeholder="Titulo" />
        <PrimaryInput type="text" placeholder="Autor" />
        <PrimaryInput type="text" placeholder="Editora" />
        <PrimaryInput
          type="text"
          placeholder="Url da imagem"
          onChange={handleImageUrlChange}
        />
        {imageUrl && <img src={imageUrl} alt="Book Cover" />}
      </Styled.Form>
    </Modal>
  );
};
