import { InvolvesPages } from "../../components/layout/InvolvesPages";
import { SideBarProfile } from "./components/SideBarProfile";
import { FormProfile } from "./components/FormProfile";
import * as Styled from "./styles";

export const Profile = () => {

    return(
        <InvolvesPages title="Perfil">
            <Styled.Container>
                <FormProfile/>
                <SideBarProfile/>
            </Styled.Container>
        </InvolvesPages>
    )
}