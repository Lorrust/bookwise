import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #F6FCFF;
    }
`