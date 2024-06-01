import styled from 'styled-components';

export const PrimaryButton = styled.button`
    border: none;
    border-radius: 0.5rem;

    background-color: #4BC1D2;
    padding: 1rem;

    color: #FFF;
    font-size: ${props => props.$size}rem;
    font-weight: 700;

    transition: background-color .2s ease-in-out;

    &:hover {
        background-color: #3CAAB3;
    }
`;
