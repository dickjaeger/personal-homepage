import styled from "styled-components";

export const Container = styled.div`
    display: inline-flex;
    float: right;
    align-items: center;
    text-align: right;
    color: ${({ theme: { colors } }) => colors.textSecondary};
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
    margin: 0;
    margin-right: 12px;

    @media screen and (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}px) {
        display: none;
    };
`;