import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;  
    border-left: 1px solid #ccc;
    padding: 0 20px;

`;

export const Notes = styled.div`
    /* display: flex;
    flex-direction: column;
    gap: 40px; */
    padding: 10px;
    overflow-y: auto;
    max-height: calc(1000px - 262px);

`
