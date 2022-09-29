import styled, { css } from "styled-components";
import { ReactComponent as Icon } from "./switchIcon.svg";

export const Box = styled.div`
    width: 48px;
    height: 26px;
    position: relative;
    background-color: ${({ theme: { colors } }) => colors.themeSwitchBackground};
    border: 1px solid;
    border-radius: 13px;
`;

export const Slider = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    margin: 2px;
    border-radius: 50%;
    background-color: currentColor;
    transition: all 0.2s;
    
    ${({ on }) => on && css`
        transform: translateX(22px);
    `};
`;

export const SwitchIcon = styled(Icon)`
    color: ${({ theme: { colors } }) => colors.themeSwitchIcon};
`;