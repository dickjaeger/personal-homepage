import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "./icon-spinner.svg";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 48px;
    margin-top: 88px;
    color: ${({ theme: { colors } }) => colors.mainBlue}
`;

export const AnimatedLoading = styled(LoadingIcon)`
    animation: loader 1s infinite linear;
    @keyframes loader {
        100% {
            rotate: 360deg;
        };
    };
`;

export const LoadingText = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme: { colors } }) => colors.textPrimary};
`;