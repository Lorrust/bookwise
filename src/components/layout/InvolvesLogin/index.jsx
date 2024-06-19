import { Link } from "react-router-dom";

import { Container } from "./styles";

export const InvolvesLogin = ({ children, text, cb, login }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    cb();
  };

  return (
    <Container>
      <section>
        <img src="/Logo.png" alt="Logo" />

        <h1>{text}</h1>

        <form onSubmit={handleSubmit}>{children}</form>

        <span>
          {login ? "Não possui uma conta? " : "Já possui uma conta? "}
          <Link to={login ? "/sign-up" : "/"}>{login ? "Cadastre-se!" : "Realize o login!"}</Link>{" "}
        </span>
      </section>
    </Container>
  );
};
