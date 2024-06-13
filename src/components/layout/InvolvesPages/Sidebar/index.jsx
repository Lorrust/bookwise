import { Link } from "react-router-dom"
import { Container } from "./sidebar"
import { useState } from "react"
export const Sidebar = () => {
  const [open, setOpenSidebar] = useState(false)
  
  return(
    <Container>
      <div className="nav" onClick={() => setOpenSidebar(!open)}>
        <nav>
          <ul>
            <li><Link to={'/home'}>Biblioteca</Link></li>
            <li><Link to={'/add-livro'}>Gerenciar Livros</Link></li>
            <li><Link to={'/'}>Suas Avaliações</Link></li>
            <li><Link to={'/'}>Suporte</Link></li>
            <li><Link to={'/'}>Sair</Link></li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}