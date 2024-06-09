import styled from "styled-components";
import Wood from "../../../assets/woodcartoon.png";

export const Container = styled.div`
    display: flex;
    
    backgroud-image:url(${Wood});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    
    header { 
        display: flex;
        padding: 20px;
        width: 100vw;
        align-items: center;
        justify-content: space-between;

        .user {
            display: flex;
            flex-direction: column;
            align-items: center;

            #photo {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-image: url(./user.png);
            }

        }
    }

    main {
        height: 100vh;
        width: 100vw;
        .nav{
            display: flex;
            justify-content: center;
            // background-color: #000;
            width: 150px;
            height: 100vh;
            padding: 20px;
            border-radius: 0 10px 10px 0;
            // box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            position: fixed;
            transition: all 0.5s ease;
            overflow: hidden;
        }
        
        #gatilho {
                width: 30px; 
                height: 100vh;
                position: absolute;
                cursor: pointer;
        } 
        
        #gatilho:hover {
            .nav {
                width: 150px;
            } 
        }
    
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
    }
`