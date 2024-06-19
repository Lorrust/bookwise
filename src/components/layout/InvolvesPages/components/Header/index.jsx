import { Container } from "./styles";
export const Header = ({ title }) => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  return (
    <Container>
      <h1>{title}</h1>

      <div>
        <h2>{loggedUser.username}</h2>
      </div>
    </Container>
  );
};
