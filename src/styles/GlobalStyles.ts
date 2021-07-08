import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --black: #3A3A3A;
        --gray: #A8A8B3;
        --white: #FFFFFF;
        --background: #F2F2FA;
        --green: #04D361;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: rgba(242, 242, 250, 1);
    }

    h1, h2, h3 {
        color: rgba(58, 58, 58, 1);
    }

    span, p {
        color: rgba(168, 168, 179, 1);
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;