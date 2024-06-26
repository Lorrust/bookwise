import { useContext, createContext, useState } from "react";

const NotesContext = createContext();

export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState([{
        id: 1,
        color: "rgb(176, 25, 113)",
        text: 'Lorem ipsum',
    }, {
        id: 2,
        color: "rgb(189, 181, 38)",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }, {
        id: 3,
        color: "rgb(52, 117, 38)",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt aliquam.',
    }]);

    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
          {children}
        </NotesContext.Provider>
    );
}

export const useNotesValue = () => {
    return useContext(NotesContext);
};