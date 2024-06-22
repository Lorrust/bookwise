import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(
    localStorage.getItem("loggedUser") ? true : false
  );

  return (
    <AuthContext.Provider value={{ logged, setLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthValue = () => {
  return useContext(AuthContext);
};
