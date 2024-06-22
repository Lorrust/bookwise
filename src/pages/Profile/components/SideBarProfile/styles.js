import styled from 'styled-components';

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: calc(100vh - 75px);
    background-color: whitesmoke;
    padding: 20px;
    margin-top: -20px;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: center;

    &:hover {
        cursor: pointer;
    }

`
export const Textos = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    text-align: center;
    margin-top: 20px;
    gap: 10px;

    h1 {
        color: black;
    }

    p{
        color: #7A7A7A;
    }
`