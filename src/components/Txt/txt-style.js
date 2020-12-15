import styled from 'styled-components';

const DesktopStartWidth = 996;

const desktop = `@media (min-width: ${DesktopStartWidth}px)`;
const mobile = `@media (max-width: ${DesktopStartWidth}px)`;

export const TextPanel = styled.div`
    font-size:${({ size }) => size}rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    text-align: center;
    padding:7px;
    z-index: 2;
    position:absolute;
    left: ${({ x }) => x}%;
    top: ${({ y }) => y}%;

    ${mobile}{
        font-size: 1rem;
    }
`;