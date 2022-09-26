import styled from "styled-components";

export const Container = styled.footer`
    margin-top: 56px;
    margin-bottom: 110px;
`;

export const Link = styled.a`
    color: ${({ theme: { colors } }) => colors.textPrimary};
    margin-right: 24px;

    &:hover {
        color: ${({ theme: { colors } }) => colors.mainBlue};
    };
`;