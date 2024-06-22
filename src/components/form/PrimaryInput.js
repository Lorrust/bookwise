import styled from 'styled-components';

export const PrimaryInput = styled.input`
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ADD8E6;
    background: rgb(173, 216, 230, 0.2);
    
    color: #5E8396;
    font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    font-size: 0.9rem;

    &::placeholder {
        color: #5E8396;
    }

    &:focus {
       border: 1px solid #2584FF;
    }
`;
