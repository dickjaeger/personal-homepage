import styled from "styled-components";

export const Container = styled.section`
    text-align: center;
    margin-top: 72px;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        margin-top: 48px;
    };
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 1.2;
    letter-spacing: 0.05em;
    color: ${({ theme: { colors } }) => colors.textPrimary};
    margin: 0;
    margin-top: 13px;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: 18px;
    };
`;

export const SubTitle = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme: { colors } }) => colors.textPrimary};
    margin-top: 8px;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: 17px;
    };
`;

export const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.tabletMax}px) {
        grid-template-columns: 1fr;
    };

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        gap: 16px;
    };
`;