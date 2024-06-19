import styled from 'styled-components';

export const PrimaryButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border: none;
    border-radius: 0.5rem;

    background-color: #4BC1D2;
    padding: 1rem;

    font-size: ${props => props.$size}rem;
    font-weight: 700;

    transition: background-color .2s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #3CAAB3;
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const SecondaryButton = styled(PrimaryButton)`
    background-color: rgb(166, 166, 166, 0.5);

    &:hover {
        cursor: pointer;
        background-color: rgb(166, 166, 166, 1);
    }
`
