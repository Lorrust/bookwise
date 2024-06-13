import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthValue } from "../../contexts/AuthContext";

import { InvolvesLogin } from "../../components/layout/InvolvesLogin";

import { PrimaryInput } from "../../components/form/PrimaryInput";
import { PrimaryButton } from "../../components/button/PrimaryButton";

export const SignUp = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    confirmPass: "",
  });

  const navigate = useNavigate();
  const { setLogged } = useAuthValue();

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const registerUser = () => {
    let users = JSON.parse(localStorage.getItem("users"));

    if (formData.pass != formData.confirmPass) {
      setError("As senhas não coincidem!");

      return;
    }

    delete formData.confirmPass

    let errorOccurred = false;

    if (users) {
      for (let user of users) {
        if (user.name == formData.name) {
          setError("Nome de usuário já cadastrado!");
          errorOccurred = true;
          break;
        } else if (user.email == formData.email) {
          setError("E-mail já cadastrado!");
          errorOccurred = true;
          break;
        }
      }
    } else {
      users = [formData];
    }

    if (errorOccurred) return;

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedUser", JSON.stringify(formData));
    navigate("/home");
  };

  return (
    <InvolvesLogin text="Cadastre-se" cb={registerUser}>
      <PrimaryInput
        type="text"
        name="name"
        id="name"
        value={formData.name}
        placeholder="Nome de usuário"
        onChange={handleChange}
        required
      />
      <PrimaryInput
        type="email"
        name="email"
        id="email"
        value={formData.email}
        placeholder="E-mail"
        onChange={handleChange}
        required
      />
      <PrimaryInput
        type="password"
        name="pass"
        id="pass"
        value={formData.pass}
        placeholder="Senha"
        onChange={handleChange}
        required
      />
      <PrimaryInput
        type="password"
        name="confirmPass"
        id="confirmPass"
        value={formData.confirmPass}
        placeholder="Confirme a senha"
        onChange={handleChange}
        required
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <PrimaryButton type="submit" $size={1.3}>
        Cadastrar-se
      </PrimaryButton>
    </InvolvesLogin>
  );
};
