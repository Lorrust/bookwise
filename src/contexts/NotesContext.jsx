import { useContext, createContext, useState } from "react";

const NotesContext = createContext();

export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState([{
        id: 1,
        color: "rgb(176, 25, 113)",
        data: '2023-09-01',
    }, {
        id: 2,
        color: "rgb(189, 181, 38)",
        data: '2023-10-01',
    }, {
        id: 3,
        color: "rgb(52, 117, 38)",
        data: new Date(),
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