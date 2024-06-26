import styled from "styled-components";

export const Container = styled.div`
    background: ${({color}) => color || 'rgba(176, 25, 113)'};
    padding: 20px 10px;
    position: relative;
    max-height: 400px;
    width: 300px;
    border-radius: 8px;
    margin: 30px 15px 0 0 ;
`

export const TextContainer = styled.div`
    padding: 10px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.5);
    max-height: 360px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    &:focus {
        scrollbar-color: auto;
    }
`    

export const Fita = styled.div` 
    background: ${({color}) => color || 'rgba(150, 2, 138)'};
    opacity: 0.5;
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    height: 30px;
    width: 130px;
` 