import styled from "styled-components";
import Wood from "../../../assets/woodcartoon.png";

export const Container = styled.div`
    display: flex;
    
    backgroud-image:url(${Wood});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    main {
        margin: 5px
        height: 100vh;
        width: 100vw;
        
        }
    }
`