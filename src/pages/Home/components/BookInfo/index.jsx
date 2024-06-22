import { useState, useEffect } from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import Creatable from 'react-select/creatable';
import makeAnimated from "react-select/animated";

import { Modal } from "../../../../components/modal";
import { PrimaryButton } from "../../../../components/button";
import { PrimaryInput } from "../../../../components/form/PrimaryInput";

import { useCategoriesValue } from "../../../../contexts/CategoriesContext";
import * as Styled from "./styles";

const animatedComponents = makeAnimated();

export const BookInfo = ({ title }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [options, setOptions] = useState([]);

  const { categories, setCategories } = useCategoriesValue();

  useEffect(() => {
    setOptions(
      categories
        .filter((category) => !category.ignore)
        .map((category) => ({
          value: category.id,
          label: category.name,
        }))
    );
  }, [categories]);

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const createOption = (label) => {
    setCategories((current) => [...current, {
      id: current.length,
      name: label,
      items: []
    }])
  }

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
        <Creatable
          isClearable 
          isMulti
          closeMenuOnSelect={false}
          options={options}
          components={animatedComponents}
          onCreateOption={createOption}
        />
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
