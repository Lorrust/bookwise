import { NavLink } from "react-router-dom"
import styled from 'styled-components';

export const Container = styled.aside`
    padding: 30px;
    background-color: #F6F6F6;

    nav {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 70px;
    }
`;

export const ItemExit = styled.a`
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;

    color: #000;
    font-size: 18px;
    text-decoration: none;
    transition: background-color .3s ease-in-out;

    &:hover {
        background-color: rgb(75, 193, 210, 0.3)
    }
`

export const ItemNav = styled(ItemExit).attrs({ as: NavLink })`
    &.active {
        background-color: rgb(75, 193, 210, 1);
    }

    &:not(.active):hover {
        background-color: rgb(75, 193, 210, 0.3)
    }
`