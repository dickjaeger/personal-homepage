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
    margin-top: 105px;
    padding: 14px;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        margin-top: 34px;
    };
`;

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    margin: 0;
    margin-bottom: 12px;
    color: ${({ theme: { colors } }) => colors.textSecondary};
`;

export const Button = styled.a`
    display: flex;
    gap: 16px;
    width: fit-content;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.05em;
    font-weight: 600;
    padding: 12px 16px;
    gap: 16px;
    background-color: ${({ theme: { colors } }) => colors.mainBlue};
    color: ${({ theme: { colors } }) => colors.white};
    text-decoration: none;
    border: 1px solid ${({ theme: { colors } }) => colors.iron};
    border-radius: 4px;

    &:hover {
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
    };

    &:active {
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    };

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.tabletMax}px) {
        font-size: 14px;
        padding: 8px 12px;
        gap: 8px;
    };
`;
export default GlobalStyle;