import "./styles";
import { Container } from "./styles";
export const Header = () => {
  return (
    <Container>

      <header>
        <img src="/Logo.png" alt="logo" />
        <div className="user">
          <img id="photo" src="./user.png" alt="foto do usuário após logar" />
          <p>
            Olá, <strong>Usuário</strong>
          </p>
        </div>
      </header>
      
    </Container>
  );
};
