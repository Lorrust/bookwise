import { useContext, createContext, useState } from "react";

const CloseModalContext = createContext();

export const CloseModalProvider = ({children}) => {
    const [closeModal, setCloseModal] = useState(true);

    return (
        <CloseModalContext.Provider value={{ closeModal, setCloseModal }}>
          {children}
        </CloseModalContext.Provider>
    );
}

export const useCloseModalValue = () => {
    return useContext(CloseModalContext);
};