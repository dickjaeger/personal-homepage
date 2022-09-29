import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    justify-items: center;
    margin-top: 95px;
`;

export const Header = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: 0.05em;
    color: ${({ theme: { colors } }) => colors.textPrimary};
`;

export const HeaderParagraph = styled.p`
    margin: 0;
    margin-top: 16px;
`;

export const Info = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme: { colors } }) => colors.textPrimary};
`;