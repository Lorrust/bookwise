import { InvolvesPages } from "../../components/layout/InvolvesPages"
import { GeneralSearch } from "./components/GeneralSearch";
export const Home = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  
  return ( 
    <InvolvesPages title={`Bem vindo ${loggedUser.name}`}>
      <GeneralSearch /> 
    </InvolvesPages>
  );
}
