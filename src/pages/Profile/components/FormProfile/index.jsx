import { PrimaryInput } from "../../../../components/form/PrimaryInput";
import { PrimaryButton } from "../../../../components/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Styled from "./styles";

export const FormProfile = () => {
  const navigate = useNavigate();
  const [operation, setOperation] = useState();

//   const loggeduser = JSON.parse(localStorage.getItem("loggedUser"));

  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")))

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

  const saveToLocalStorage = () => {
    const updatedUser = { ...loggedUser, username, email, password};
    localStorage.setItem("loggedUser", JSON.stringify(updatedUser));

    setLoggedUser(updatedUser);
  };

  function removeUser() {
    setOperation(localStorage.removeItem("loggedUser"));
    navigate("/");
  }

  if (operation === "Excluir") {
    removeUser();
  }

  return (
    <Styled.Container>
      <Styled.FormContainer>
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
            // value={password}
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
          <PrimaryButton onClick={saveToLocalStorage} type="submit">
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
