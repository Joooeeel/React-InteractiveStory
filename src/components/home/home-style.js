import style from 'styled-components';
import menuImg from '../../img/icono-menu.png';
import nameImg from '../../img/icononombre.png';

export const Container = style.div`
    width:100%;
    margin: auto;
    background-color: black;
    position: relative;
`
export const Background = style.div`
    width: ${({ width }) => width}px;
    height:${({ height }) => height}px;
    background-image:url(${({ back }) => back});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: black;
    position: relative;
    margin:auto;
`;

export const Menu = style.div`
    width: 50px; height: 50px;
    background-image: url(${menuImg});
    background-size: 100% 100%;
    position: fixed;
    z-index:10;
    right: 20px;
    top: 0px;
`

export const Dialog = style.div`
    background-image: url(${({ dialogImg }) => dialogImg});
    background-size: 100% 100%;
    position: absolute;
    width: ${({ width }) => width}px; 
    height: 25%;
    left: 0px;
    bottom: 0;
   
    p{
        color:white;
        font-size:2rem;
        font-family:Arial, Helvetica, sans-serif;
        text-align: center;
        margin-top:5%;
    }

    img{
        width: 25%; height: 35%;
        position: relative;
        top: -34%;
        display: ${({ isvisible }) => isvisible ? 'block' : 'none'};
    }
`