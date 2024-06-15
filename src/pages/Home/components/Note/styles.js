import styled from "styled-components";

export const Container = styled.div`
    background: rgba(176, 25, 113);
    padding: 20px 10px;
    position: relative;
    max-height: 400px;
    width: 300px;
    border-radius: 8px;
    margin-top: 30px;
    p{
        padding: 10px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.5);
    }
`
export const Fita= styled.div` 
    background: rgba(150, 2, 138);
    opacity: 0.5;
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    height: 30px;
    width: 130px;
` 