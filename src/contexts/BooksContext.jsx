import { useContext, createContext, useState } from "react";

const BooksContext = createContext();

export const BooksProvider = ({children}) => {
    const [books, setBooks] = useState([{
        id: 1,
        name: "Harry Potter e a Pedra Filosofal",
        author: "J.K. Rowling",
        img_source: "https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UF1000,1000_QL80_.jpg"
    }, {
        id: 2,
        name: "Auto da Barca do Inferno",
        author: "Gil Vicente",
        img_source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgP5XJoJnY6Ov73duT68O_0fl3XEgQaNfXtw&s"
    }, {
        id: 3,
        name: "Brawlhalla: O Livro do Torneio",
        author: "S.Lorrust",
        img_source: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6i3u.jpg"
    }, {
        id: 4,
        name: "Morona e o Reino de Pedra",
        author: "M0rena Rosa",
        img_source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1r37A1vfgCvwvKJtH68TIBiPehu3hej74Eg&s"
    }]);

    return (
        <BooksContext.Provider value={{ books, setBooks }}>
          {children}
        </BooksContext.Provider>
    );
}

export const useBookValue = () => {
    return useContext(BooksContext);
};