import { useState } from "react";
import { InvolvesPages } from "../../components/layout/InvolvesPages";
import { SideBarProfile } from "./components/SideBarProfile";
import { FormProfile } from "./components/FormProfile";
import * as Styled from "./styles";

export const Profile = () => {
    const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")))

    return(
        <InvolvesPages title="Perfil">
            <Styled.Container>
                <FormProfile infosUser={{loggedUser, setLoggedUser}} />
                <SideBarProfile loggedUser={loggedUser}/>
            </Styled.Container>
        </InvolvesPages>
    )
}