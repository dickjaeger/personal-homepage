import styled from "styled-components";

export const Container = styled.footer`
    margin-top: 56px;
    margin-bottom: 110px;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        margin-top: 40px;
        margin-bottom: 32px;
    };
`;

export const Link = styled.a`
    color: ${({ theme: { colors } }) => colors.textPrimary};
    margin-right: 24px;
    transition: color 0.2s;

    &:hover {
        color: ${({ theme: { colors } }) => colors.mainBlue};
    };
`;