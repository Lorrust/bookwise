import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InvolvesLogin } from "../../components/layout/InvolvesLogin";

import { PrimaryInput } from "../../components/form/PrimaryInput";
import { CheckBoxLine } from "../../components/form/CheckBoxLine";
import { PrimaryButton } from "../../components/button/PrimaryButton";

export const Login = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
    remember: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };
  const checkCredentials = () => {
    const users = JSON.parse(localStorage.getItem("users"));

    if (users) {
      for (const user of users) {
        if (user.email === formData.email && user.pass === formData.pass) {
          localStorage.setItem("loggedUser", JSON.stringify(user));
          navigate("/home");
          return;
        }
      }
    }

    setError("Credenciais inválidas!");
  };

  return (
    <InvolvesLogin text="Login" cb={checkCredentials} login>
      <PrimaryInput
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
        onChange={handleChange}
        required
      />
      <PrimaryInput
        type="password"
        name="pass"
        id="pass"
        placeholder="Senha"
        onChange={handleChange}
        required
      />

      <CheckBoxLine
        text="Lembrar-me"
        id="remember"
        onChange={(isClicked) =>
          setFormData({
            ...formData,
            remember: isClicked,
          })
        }
      />

      <PrimaryButton type="submit" $size={1.3}>
        Iniciar sessão
      </PrimaryButton>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </InvolvesLogin>
  );
};
