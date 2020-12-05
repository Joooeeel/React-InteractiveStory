import styled from 'styled-components';

export const Door = styled.div`
 position: absolute;
 left: ${({ x }) => x}%;
 top: ${({ y }) => y}%;
 width: ${({ width }) => width}%;
 height: ${({ height }) => height}%;
 border:2px solid red;
 z-index: 9999;
 cursor: pointer;

 
`;