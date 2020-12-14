import styled from 'styled-components';
import back from "../../img/seleccion1.png";

export const Door = styled.div`
 position: absolute;
 left: ${({ x }) => x}%;
 top: ${({ y }) => y}%;
 width: ${({ width }) => width}%;
 height: ${({ height }) => height}%;
 background-image: url(${({ isOption }) => (isOption ? back : null)});
 background-size: 100% 100%;

 z-index: 9999;
 cursor: pointer; 
`;

export const Texto = styled.div`
color: white;
font-size:2rem;
padding: 15px;
font-family:Arial, Helvetica, sans-serif;
text-align: center;
`