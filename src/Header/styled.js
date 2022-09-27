import styled from "styled-components";

export const Container = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
    align-items: center;
`;

export const Photo = styled.img`
    width: 384px;
    height: 384px;
    border-radius: 50%;
`;

export const TextContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
`;

export const Title = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 0;
    color: ${({ theme: { colors } }) => colors.textPrimary};
`;

export const LeadParagraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
    color: ${({ theme: { colors } }) => colors.textSecondary};
`;