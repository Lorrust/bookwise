import { useNavigate } from "react-router-dom";
import * as Styled from "./styles"
import { useAuthValue } from "../../../../../contexts/AuthContext";

export const SideBar = () => {
  const navigate = useNavigate();
  const { setLogged } = useAuthValue()

  const logoutUser = () => {
    localStorage.removeItem("loggedUser");

    setLogged(false);
    
    navigate("/")
  }

  return (
    <Styled.Container>
        <img src="public/Logo.png" alt="Logo" onClick={() => navigate("/home")} />

        <nav>
            <Styled.ItemNav to="/home">Início</Styled.ItemNav>
            <Styled.ItemNav to="/library">Minha biblioteca</Styled.ItemNav>
            <Styled.ItemNav to="/notes">Notas</Styled.ItemNav>
            <Styled.ItemExit onClick={logoutUser}>Sair</Styled.ItemExit>
        </nav>
    </Styled.Container>
  )
}
