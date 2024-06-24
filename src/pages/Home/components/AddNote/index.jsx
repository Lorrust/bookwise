import * as Styled from "./styles";
import { PlusIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../components/modal";
import { PrimaryButton } from "../../../../components/button";
import { SecondaryButton } from "../../../../components/button";
import { useNotesValue } from "../../../../contexts/NotesContext";
import { Close } from "@radix-ui/react-dialog";

export const AddNote = () => {

  function handleCreateNote(e) {
    event.preventDefault();
    console.log("Criar Nota");
  }

  return (
    <Modal 
        button={
            <PrimaryButton>
                <PlusIcon />
                <span>Nota</span>
            </PrimaryButton>
        }

        title="Nova Nota"
    >
      <Styled.Form>
        <Styled.Container>
          <label htmlFor="color">Selecione uma cor:</label>
          <input type="color" name="color" />
        </Styled.Container>
        
        <Styled.ButtonsFotter>
          <PrimaryButton type="submit" onClick={handleCreateNote}>Criar</PrimaryButton>
          
          <Close asChild>
            <SecondaryButton>Cancelar</SecondaryButton>
          </Close>
        </Styled.ButtonsFotter>
      </Styled.Form>
    </Modal>
  );
}