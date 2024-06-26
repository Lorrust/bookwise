import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 40px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

    div {
        background-color: #F6F6F6;
        padding: 10px 30px;
        border-radius: 10px;
        font-size: 85%;

        h2 {
            color: #404040
        }

        p {
            margin-top: 5px;
            cursor: pointer;
        }
    }
`;
