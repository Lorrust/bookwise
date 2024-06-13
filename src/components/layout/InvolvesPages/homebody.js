import styled from "styled-components";

export const Container = styled.div`
    *{
        font-family: 'Roboto', sans-serif;
    }
    main {
        // display:flex;
        // justify-content: center;
        // align-items: center;
        height: 100vh;
        width: 100vw;
    
    .container {
        display: grid;
        justify-content: center;
    
        // h1 {
        //     text-align: center;
        //     font-size: 25px;
        //     margin: 4px;
        // }
        .catalog {
            display: grid;

                .favorite, .recently-added, .reading {
                    display: grid;
                    // justify-content: center;   
                    margin: 4px;
                    padding: 4px;
                    border-radius: 8px;
                    box-shadow: 0 0 4px #000;

                    .contain {
                        display: flex;
                        justify-content: center;
                        gap: 50px;
                        padding: 20px;
                    }

                    h2 {
                        font-size: 20px;
                        margin: 4px;
                    }
                }
            
                h2 {
                    font-size: 14px;
                    margin: 4px;
                }
            }
        }   
    }
}`;
