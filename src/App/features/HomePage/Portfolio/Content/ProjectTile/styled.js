import styled from "styled-components";

export const Container = styled.article`
    text-align: start;
    background-color: ${({ theme: { colors } }) => colors.background2};
    padding: 56px;
    border: 6px solid ${({ theme: { colors } }) => colors.iron};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    transition: border 0.2s;

    &:hover {
        border: 6px solid ${({ theme: { colors } }) => colors.mainBlueBorder};
    };

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        padding: 24px;
    };
`;

export const Title = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: 0.05em;
    color: ${({ theme: { colors } }) => colors.mainBlue};
    margin-bottom: 24px;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: 16px;
        margin-bottom: 16px;
    };
`;

export const Paragraph = styled.p`
    margin-top: 0;
    margin-bottom: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme: { colors } }) => colors.textSecondary};

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: 14px;
    };
`;

export const Description = styled(Paragraph)`
    margin-bottom: 24px;
    
    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        margin-bottom: 16px;
    };
`;

export const Link = styled(Paragraph)`
    color: ${({ theme: { colors } }) => colors.mainBlue};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.mainBlueBorder};
    margin-left: 13px;
    transition: border-color 0.2s;

    &:hover {
        border-color: ${({ theme: { colors } }) => colors.mainBlue};
    };
`;