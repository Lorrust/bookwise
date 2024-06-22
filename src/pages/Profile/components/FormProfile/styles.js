import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 800px;
    padding: 20px;
    gap: 10px;
`
export const Identifier = styled.div`
    display: flex;
    gap: 10px;

    input{
        flex: 1;
    }
`
export const FormBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`