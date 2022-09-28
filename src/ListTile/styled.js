import styled from "styled-components";
import listStyleImage from "./list-style-image.svg";

export const Container = styled.section`
    background-color: ${({ theme: { colors } }) => colors.background2};
    padding: 32px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    margin-top: 72px;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        margin-top: 48px;
        padding: 16px;
    };
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 900;
    line-height: 1.2;
    margin: 0;
    color: ${({ theme: { colors } }) => colors.textPrimary};
    padding-bottom: 15px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.iron};

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: 18px;
    };
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-left: 15px;
    margin-top: 24px;
    list-style-image: url(${listStyleImage});
    
    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.tabletMax}px) {
        grid-template-columns: 1fr 1fr;
    };

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
    };
`;

export const ListItem = styled.li`
    margin-top: 8px;
    padding-left: 16px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme: { colors } }) => colors.textSecondary};

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        font-size: 14px;
    };

`;