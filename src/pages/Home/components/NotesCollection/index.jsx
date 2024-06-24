import * as Styled from "./styles";
import { useState } from "react";
import { Note } from "../Note";
import { PrimaryButton } from "../../../../components/button";
import { useNotesValue } from "../../../../contexts/NotesContext";
import { PlusIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../components/modal";
import { AddNote } from "../AddNote";

export const NotesCollection = () => {
  const { notes } = useNotesValue();

  const [noteColor, setNoteColor] = useState("")

  function handleNewNote() {
    setNotes((currentNotes) => ([
      ...currentNotes,
      {
        id: currentNotes.length + 1,
        color: noteColor,
        text: "",
      }
    ]));
  }

  return (
    <Styled.Container>
      <Styled.LineHeader>
        <h2>Notas</h2>

        <AddNote />
      </Styled.LineHeader>
      <Styled.Notes>
        {notes.map((note) => (
          <Note key={note.id} text={note.text} color={note.color} />
        ))}
      </Styled.Notes>
    </Styled.Container>
  );
};
