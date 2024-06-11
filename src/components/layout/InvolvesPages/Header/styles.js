import styled from "styled-components";

export const Container = styled.header`
    header { 
        display: flex;
        padding: 5px;
        width: 100vw;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #000;

        .user {
            display: flex;
            flex-direction: column;
            align-items: center;

            #photo {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-image: url(./user.png);
            }

        }
    }
` 