import styled from "styled-components";

export const Container = styled.div`
    .card{
        height: 100px
        width: 80px;
        border: 1px solid #000;
        border-radius: 5px;
        padding: 5px;
    }
        
        img {
            display: flex;
            height: 40px;
            width: 40px;
            justify-content: center;
            width: 100px;
            height: 100px;

        }

    .card:hover {
        transition: 0.5s;
        cursor: pointer;
        height: 220px
        width: 120px;
    }
`;	