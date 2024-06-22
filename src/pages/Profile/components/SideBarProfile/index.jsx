import * as Styled from './styles';

export const SideBarProfile = ({photo}) => {
    const loggeduser = JSON.parse(localStorage.getItem("loggedUser"));
    const name= loggeduser.name.replaceAll(" ", "+");

    return (
        <Styled.Container>
            <Styled.Avatar src={photo ? photo : `https://ui-avatars.com/api/?background=random&name=${name}`} alt="profile photo"/>
            <Styled.Textos>
                <h2><strong>{loggeduser.username}</strong></h2>
                <p>{loggeduser.email}</p>
            </Styled.Textos>
        </Styled.Container>
    )
}