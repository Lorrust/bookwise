import styled from 'styled-components';

import Lib from '../../../assets/lib.png'

export const Container = styled.div`
    height: 100vh;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${Lib});
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 60%;
    background-color: #f4f4f4; 

    section {
        position: relative;
        box-shadow: 0px 10px 14px 4px rgba(0,0,0,0.1);
        padding: 2rem;
        border-radius: 0.5rem;
        width: 600px;

        background-color: #fff;

        img {
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            top: -20px
        }

        form {
            display: flex;
            flex-direction: column;

            gap: 1.5rem;

            margin: 1rem 0;
        }
    }
`;
