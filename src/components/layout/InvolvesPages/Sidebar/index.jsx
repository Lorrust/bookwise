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
            <li><Link to={'/'}>teste</Link></li>
            <li><Link to={'/cadastro'}>teste</Link></li>
            <li><Link to={'/addlivro'}>teste</Link></li>
            <li><Link to={''}>teste</Link></li>
          </ul>
        </nav>
      </div>

    </Container>
  )
}