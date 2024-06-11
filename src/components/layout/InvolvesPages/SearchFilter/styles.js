import styled from "styled-components";

export const Container = styled.div`
    .search-filter {
            display: flex;
            justify-content: center;
            gap: 10px;
            
            input {
                width: 50%;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #000;
            }

            select {
                width: 10%;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #000;
            }      
        }
` 