import { PrimaryInput} from '../../../../components/form/PrimaryInput';
import {PrimaryButton} from '../../../../components/button';
import * as Styled from './styles';	

export const FormProfile = () => {
    const loggeduser = JSON.parse(localStorage.getItem("loggedUser"));

    function handleSubmit(event) {
        event.preventDefault();
        
    }
    return(
        <Styled.Container>
            <Styled.FormContainer>
                <Styled.Identifier>
                    <PrimaryInput value={loggeduser.name} placeholder="Nome de Completo" />
                    <PrimaryInput value={loggeduser.username} placeholder="Nome de Usuário" />
                </Styled.Identifier>
                <Styled.FormBody>
                    <PrimaryInput type="email" value={loggeduser.email} placeholder="E-mail" />
                    <PrimaryInput type="password" placeholder="Senha" />
                    <PrimaryInput type="password" placeholder="Confirmar Senha" />
                </Styled.FormBody>
                <Styled.ButtonContainer>
                    <PrimaryButton type="submit">Salvar</PrimaryButton>
                </Styled.ButtonContainer>
            </Styled.FormContainer>
        </Styled.Container>
    )
}