import { InvolvesPages } from "../../components/layout/InvolvesPages"
import { Card } from "../../components/layout/InvolvesPages/Card/card"
export const Home = () => {
  return ( 
    <InvolvesPages>
      <Card 
        Nome= "Nome do livro"
        Autor= "Autor do livro"
        Editora= "Editora do livro"
      />
    </InvolvesPages>
  )
}
