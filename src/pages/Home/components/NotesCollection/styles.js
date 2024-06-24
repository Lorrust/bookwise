import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;  
    border-left: 1px solid #ccc;
    padding-left: 20px;

`;

export const LineHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 25px
`

export const Notes = styled.div`
    padding: 10px;
    max-height: calc(100vh - 245px);
    transition: all 0.3s ease-in-out;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    &:hover {
        scrollbar-color: auto;
    }
`
