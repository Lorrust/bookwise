import { Overlay as Over, Content as Cont } from '@radix-ui/react-dialog';

import styled from 'styled-components';

export const Overlay = styled(Over)`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
`

export const Content = styled(Cont)`
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: white;
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    max-width: 500px;

    z-index: 20;

    footer {
        margin-top: 20px;
        display: flex;
        justify-content: end;
        gap: 15px;
    }
`

export const Container = styled.div`
    flex: 1;
`

export const HeaderLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    button {
        background-color: transparent;
        border: none;

        svg {
            width: 20px;
            height: 20px;
        }
    }
`