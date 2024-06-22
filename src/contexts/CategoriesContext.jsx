import { useContext, createContext, useState } from "react";

const CategoriesContext = createContext();

export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([{ 
        id: 1,
        name: 'Recentemente adicionados',
        ignore: true,
        items: [4, 3, 2, 1]
    },
    {
        id: 2,
        name: 'Favoritos',
        ignore: true,
        items: [1, 2, 3, 4]
    }, {
        id: 3,
        name: 'Ficção',
        items: [1]
    }, {
        id: 4,
        name: 'Jogos',
        items: [3]
    }, {
        id: 5,
        name: 'Ação',
        items: [4]
    }, {
        id: 6,
        name: 'Dramaturgia',
        items: [2]
    }]);

    return (
        <CategoriesContext.Provider value={{ categories, setCategories }}>
          {children}
        </CategoriesContext.Provider>
    );
}

export const useCategoriesValue = () => {
    return useContext(CategoriesContext);
};