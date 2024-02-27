import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        font-family: "Nunito", sans-serif;
        background: ${(props) => props.theme["base-background"]};
        color: ${(props) => props.theme["base-text"]};
        font-size: 1.6rem;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }
`;
