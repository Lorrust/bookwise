import styled from "styled-components";

export const Container = styled.div`
    .search-filter {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin: 5px;
            padding: 10px;
            
            input {
                width: 50%;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #000;
                box-shadow: 0px 0 5px rgba(0, 0, 0, 0.6);
            }

            select {
                width: 10%;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #000;
            }      
        }
` 