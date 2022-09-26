import styled from "styled-components";

export const Container = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
    margin-top: 105px;
`;

export const Photo = styled.img`
    width: 384px;
    height: 384px;
    border-radius: 50%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    margin: 0;
    color: ${({ theme: { colors } }) => colors.textSecondary};
`;

export const Title = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin-top: 12px;
    margin-bottom: 0;
    color: ${({ theme: { colors } }) => colors.textPrimary};
`;

export const LeadParagraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    margin-top: 35px;
    margin-bottom: 0;
    color: ${({ theme: { colors } }) => colors.textSecondary};
`;

export const HireMeButton = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.05em;
    font-weight: 600;
    padding: 12px 16px;
    gap: 16px;
    width: 154px;
    margin-top: 32px;
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
`;