import styled from "styled-components";

export const Container = styled.nav`
    // display: flex;
    // text-align: center;
    // justify-content: center;
    width: 200px;
    height: 100vh;
    padding: 20px;
    border-right: 1px solid #000;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    position: absolute;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;

        li {
            font-size: 18px;
            padding: 10px;
            border-radius: 5px;
            transition: 0.3s;
            cursor: pointer;

            a {
                text-decoration: none;
                color: #000;
            }

            &:hover {
                background-color: lightcoral;
            }
        }
    }
`
