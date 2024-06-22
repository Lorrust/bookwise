import { useState } from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import { Close } from "@radix-ui/react-dialog";

import { Modal } from "../../../../components/modal";
import { PrimaryButton, SecondaryButton } from "../../../../components/button";
import { PrimaryInput } from "../../../../components/form/PrimaryInput";
import { MultiSelect } from "../../../../components/form/Select";

import { useCategoriesValue } from "../../../../contexts/CategoriesContext";
import { useBookValue } from "../../../../contexts/BooksContext";
import { useCloseModalValue } from "../../../../contexts/CloseModalContext";
import * as Styled from "./styles";

export const BookInfo = ({ title }) => {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    categories: [],
    img_source: "",
  });

  const [error, setError] = useState(null);

  const { setCategories } = useCategoriesValue();
  const { books, setBooks } = useBookValue();
  const { setCloseModal } = useCloseModalValue();

  const handleOnBlur = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.categories.length) {
      setError("Selecione ao menos uma categoria");

      return;
    } else {
      setError(null);
    }
  
    // Cria as categorias novas
    formData.categories.forEach((categorie) => {
      if(categorie.__isNew__) {
        setCategories((currentCategories) => {

          categorie.value = currentCategories.length + 1

          return ([
            ...currentCategories,
            {
              id: currentCategories.length + 1,
              name: categorie.label,
              items: []
            }
          ])
        })
      }
    })

    // Adiciona o id do novo livro nas categorias selecionadas
    formData.categories.forEach((categorie) => {
      setCategories((currentCategorie) => currentCategorie.map((category) => {
        if(category.id === categorie.value) {
          return { ...category, items: [...category.items, books.length + 1]}
        }

        return category
      }))
    })

    // Cria o novo livro
    setBooks((currentBooks) => ([
      ...currentBooks,
      {
        id: currentBooks.length + 1,
        name: formData.name,
        author: formData.author,
        img_source: formData.img_source
      }
    ]))

    // Reseta o estado do forms
    setFormData({
      name: "",
      author: "",
      categories: [],
      img_source: "",
    })

    // Fecha o modal
    setCloseModal(false)
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
      <Styled.Form onSubmit={handleSubmit}>
        <PrimaryInput 
          type="text"
          name="name"
          placeholder="Titulo"
          required
          onBlur={handleOnBlur}
        />

        <PrimaryInput 
          type="text"
          name="author"
          placeholder="Autor"
          required
          onBlur={handleOnBlur}
        />

        <MultiSelect setData={setFormData} />

        <PrimaryInput
          type="text"
          name="img_source"
          value={formData.img_source}
          placeholder="Url da imagem"
          required
          onChange={(e) =>
            setFormData((current) => ({
              ...current,
              img_source: e.target.value,
            }))
          }
        />

        <Styled.Container>
          <div
            style={{
              backgroundImage: `url(${formData.img_source})`,
            }}
          >
            {!formData.img_source && <span>Preview</span>}
          </div>
        </Styled.Container>

        {error && (
          <Styled.ErrorLine>
            <p>{error}</p>
          </Styled.ErrorLine>
        )}

        <Styled.ButtonsFotter>
          <PrimaryButton type="submit">Salvar</PrimaryButton>

          <Close asChild>
            <SecondaryButton>Cancelar</SecondaryButton>
          </Close>
        </Styled.ButtonsFotter>
      </Styled.Form>
    </Modal>
  );
};
