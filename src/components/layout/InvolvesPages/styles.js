import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;

    article {
        display: flex;
        flex-direction: column;
        width: 100%
    }
    
    main {
        display: flex;
        flex-direction: column;
        padding: 20px 0 0 40px;
        flex: 1;
    }
`;
