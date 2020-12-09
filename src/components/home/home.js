import { Background, Menu, Dialog, Container } from './home-style';
import Txt from '../Txt/txt';
import nameImg from '../../img/icononombre.png';

export default ({ back, width, height, dataImportant, children }) => {

    console.log(dataImportant[0].nameVisible);
    return (
        <Container>
            <Menu />
            <Background back={back} width={width} height={height}>{children}

                <Dialog dialogImg={dataImportant[0].txtBackground} width={width}>

                    {//<p>{//dataImportant[0].txt}</p>
                        dataImportant.map(obj => <Txt data={obj} />)
                    }
                    <img src={nameImg} isvisible={dataImportant[0].nameVisible} />
                </Dialog>
            </Background>

        </Container>
    )
}