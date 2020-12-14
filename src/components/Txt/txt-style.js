import styled from 'styled-components';

export const TextPanel = styled.div`
    font-size:${({ size }) => size}%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    text-align: center;
    padding:7px;
    z-index: 2;
    position:absolute;
    left: ${({ x }) => x}%;
    top: ${({ y }) => y}%;
`;