import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
    box-sizing:border-box;   
    };

    *, ::before, ::after {
    box-sizing: inherit;
    };

    body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme: { colors } }) => colors.background};
    };
`;

export const Container = styled.main`
    max-width: 1244px;
    margin: auto;
    padding: 14px;
`;

export default GlobalStyle;