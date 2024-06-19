import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 20px;

    flex: 1;
`;

export const CardContainer = styled.div`
    overflow-y: auto;
    max-height: calc(100vh - 150px);
    flex: 1;

    scrollbar-color: transparent transparent;

    &:hover {
        scrollbar-color: auto;
    }
`

export const Line = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 40px;
`
