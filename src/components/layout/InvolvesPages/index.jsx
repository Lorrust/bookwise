import { Container } from "./homebody";
import { Link } from "react-router-dom";

export const InvolvesPages = () => {
  return (
    <Container>
      <section>
        <header>
          <img src="/Logo.png" alt="logo" />
          <div className="user">
            <img id="photo" src="./user.png" alt="foto do usuário após logar" />
            <p>Olá, <strong>Usuário</strong></p>
          </div>
        </header>
        <main>
          <div className="nav">
            <nav>
              <ul>
                <li><Link to={"/"}>teste</Link></li>
                <li><Link to={'/cadastro'}>teste</Link></li>
                <li><Link to={""}>teste</Link></li>
                <li><Link to={""}>teste</Link></li>
              </ul>
            </nav>
          </div>
          <div id="gatilho"></div>
          <div className="search-filter">
            <input type="text" placeholder="Procurar por livros ou anotações" />
            <select>
              <option value="1">Filtros</option>
            </select>
          </div>
        </main>
      </section>
    </Container>
  );
}