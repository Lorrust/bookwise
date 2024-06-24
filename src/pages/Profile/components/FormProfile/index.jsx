import { PrimaryInput } from "../../../../components/form/PrimaryInput";
import { PrimaryButton } from "../../../../components/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useAuthValue} from "../../../../contexts/AuthContext"
import * as Styled from "./styles";

export const FormProfile = ({infosUser}) => {
  const navigate = useNavigate();
  const {setLogged} = useAuthValue();

  const { loggedUser, setLoggedUser } = infosUser;

  const [username, setUsername] = useState(loggedUser.username);
  const [email, setEmail] = useState(loggedUser.email);
  const [password, setPassword] = useState(loggedUser.pass);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const saveToLocalStorage = (e) => {
    e.preventDefault();

    const updatedUser = { ...loggedUser, username, email};

    localStorage.setItem("loggedUser", JSON.stringify(updatedUser));

    setLoggedUser(updatedUser);

    const users = JSON.parse(localStorage.getItem("users"));
    
    const userIndex = users.findIndex(user => user.id === loggedUser.id);

    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      const updatedUsersJson = JSON.stringify(users);
      localStorage.setItem("users", updatedUsersJson);
    }

  };

  function removeUser() {
    
    const users = JSON.parse(localStorage.getItem("users"));
    
    const userIndex = users.findIndex(user => user.id === loggedUser.id);
    
    if (userIndex !== -1) {

      users.splice(userIndex, 1);
    
      const updatedUsersJson = JSON.stringify(users);
    
      localStorage.setItem("users", updatedUsersJson);
    }
  

    localStorage.removeItem("loggedUser");
    setLogged(false)
    navigate("/");
  }

  return (
    <Styled.Container>
      <Styled.FormContainer onSubmit={saveToLocalStorage}>
        <Styled.Identifier>
          <PrimaryInput
            value={loggedUser.name}
            placeholder="Nome de Completo"
          />
          <PrimaryInput
            value={username}
            onChange={handleUsernameChange}
            placeholder={loggedUser.username}
          />
        </Styled.Identifier>
        <Styled.FormBody>
          <PrimaryInput
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={loggedUser.email}
          />
          <PrimaryInput
            type="password"
            onChange={handlePasswordChange}
            placeholder="Senha"
          />
          <PrimaryInput
            type="password"
            onChange={handlePasswordChange}
            placeholder="Confirmar Senha"
          />
        </Styled.FormBody>
        <Styled.ButtonContainer>
          <PrimaryButton type="submit">
            Salvar
          </PrimaryButton>
          <PrimaryButton
            onClick={removeUser}
            $color={"#ff6347"}
            $hover={"#e5543e"}
            type="submit"
          >
            Excluir
          </PrimaryButton>
        </Styled.ButtonContainer>
      </Styled.FormContainer>
    </Styled.Container>
  );
};
