import styled from "styled-components";

export const Container = styled.section`
    margin-top: 120px;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        margin-top: 48px;
    };
`;

export const Mail = styled.h2`
    margin: 0;
    font-size: 32px;
    font-weight: 900;
    line-height: 1.2;
    letter-spacing: 0.05em;
    color: ${({ theme: { colors } }) => colors.textPrimary};

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: 18px;
    };
`;

export const Paragraph = styled.p`
    margin-top: 24px;
    margin-bottom: 0;
    max-width: 670px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme: { colors } }) => colors.textPrimary};

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        margin-top: 12px;
        font-size: 14px;
    };
`;