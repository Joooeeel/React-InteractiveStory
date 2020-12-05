import { Background, Menu, Dialog, Container } from './home-style';
import Txt from '../Txt/txt';

export default ({ back, width, height, dataImportant, children }) => {

    console.log(dataImportant);
    return (
        <Container>
            <Menu />
            <Background back={back} width={width} height={height}>{children}

                <Dialog dialogImg={dataImportant[0].txtBackground} width={width}>
                    {//<p>{//dataImportant[0].txt}</p>
                        dataImportant.map(obj => <Txt data={obj} />)
                    }
                </Dialog>
            </Background>

        </Container>
    )
}