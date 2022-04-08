import { createGlobalStyle } from "styled-components";
import InterLight from "./InterLight.woff";
import InterBold from "./InterBold.woff";

const GlobalStyle = createGlobalStyle`
 @font-face {
     font-family: 'InterLight';
     src: url(${InterLight}) format('woff');
 }
 @font-face {
     font-family: 'InterBold';
     src: url(${InterBold}) format('woff');
 }

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* background-color: #2d2d2d; */
    }
`;

export default GlobalStyle;
