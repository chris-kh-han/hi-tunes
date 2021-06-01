import { createGlobalStyle } from "styled-components";
    // #01B33E main color
export const GlobalStyle = createGlobalStyle`
    

    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #fff;
        color: #03051F;
        font-size: 16px;
        margin: 0;
        padding: 0;
        
    }

    :root {
        --bg: #000;
        --text-color: #fff;
        --special-color: #01B33E;
        --speed: 500ms;

        
    }

    #root {
        min-height: 100vh;
        display:flex;
        flex-direction: column;
    }
    

  

    
    
`;
