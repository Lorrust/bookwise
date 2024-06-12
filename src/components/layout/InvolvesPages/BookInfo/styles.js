import styled from "styled-components";

export const Container = styled.div`
    .bookinfo {
            display: flex-column;
            justify-content: center;
            gap: 10px;
            
            input {
                width: auto;
                padding: 5px;
                margin-bottom: 15px;
                border-radius: 5px;
                border: 1px solid #000;
            }
            input[type="file"] { 
                margin-bottom: 10px; 
                border: 0px;
            }
            
            div {
                display:flex;
                justify-content: space-around;
            }
            button {
                display: inline-flex;
                width: auto;
                padding: 5px;
                margin-bottom: 10px;
                
                border-radius: 5px;
                border: 1px solid #000;
            }      
        }
` 