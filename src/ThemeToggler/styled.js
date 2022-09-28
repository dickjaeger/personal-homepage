import styled from "styled-components";

export const Container = styled.div`
    float: right;
    display: flex;
    align-items: center;
    text-align: right;
    cursor: pointer;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        margin-top: -12px;
    };
`;

export const TogglerText = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${({ theme: { colors } }) => colors.textSecondary};
    margin: 0;
    margin-right: 12px;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.tabletMax}px) {
        display: none;
    };
`;