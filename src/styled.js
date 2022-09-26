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

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    margin: 0;
    color: ${({ theme: { colors } }) => colors.textSecondary};
`;

export default GlobalStyle;