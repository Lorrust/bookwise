import { InvolvesPages } from "../../components/layout/InvolvesPages"
import { Card } from "../../components/layout/InvolvesPages/Card/card"
import {SearchFilter} from "../../components/layout/InvolvesPages/SearchFilter"
export const Home = () => {
  return ( 
    <InvolvesPages title={'Bem-vindos a sua biblioteca online!'}
      catalog_name1={'Favoritos'}
      catalog_name2={'Adicionados recentemente'}
      catalog_name3={'Continue lendo'}
    >
      {/* <SearchFilter /> */}
     <Card
      name={'Livro 1'}
      author={'Autor 1'}
      company={'Editora 1'} 
     />
     <Card
      name={'Livro 2'}
      author={'Autor 2'}
      company={'Editora 2'} 
     />
     <Card
      name={'Livro 3'}
      author={'Autor 3'}
      company={'Editora 3'} 
     />
    
    </InvolvesPages>
  );
}
