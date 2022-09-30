import styled from "styled-components";

export const Container = styled.div`
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