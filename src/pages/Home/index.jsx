import { InvolvesPages } from "../../components/layout/InvolvesPages"
export const Home = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  
  return ( 
    <InvolvesPages title={`Bem vindo ${loggedUser.name}`}>
      <h1>Conteúdo</h1>    
    </InvolvesPages>
  );
}
