import { useState } from "react";
import { InvolvesPages } from "../../components/layout/InvolvesPages";

export const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleNoteSubmit = (event) => {
      event.preventDefault();
      
      if (newNote.trim() !== "") {
        setNotes([...notes, newNote]);
        setNewNote("");
      }
    };

  return (
    <InvolvesPages title="Notas pessoais">
      <h1>Notes</h1>
      <form onSubmit={handleNoteSubmit}>
        <input
          type="text"
          value={newNote}
          onChange={handleNoteChange}
          placeholder="Enter a new note"
        />
        <button type="submit">Add Note</button>
      </form>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </InvolvesPages>
  );
};
