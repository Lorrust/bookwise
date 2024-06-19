import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar"
import { Container } from "./styles"

export const InvolvesPages = ({children, title}) => {
  return (
      <Container>
        <SideBar />

        <article>
          <Header title={title}/>

          <main>
            {children}
          </main>
        </article>
        
      </Container>
  )
}
