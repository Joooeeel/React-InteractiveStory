import { useState, useEffect } from 'react';
import { TextPanel } from './txt-style';

export default ({ data }) => {

    const [currentTxt, setCurrentText] = useState('');
    const [timeout, saveTimeout] = useState(null);
    const [, setLetterPos] = useState(0);


    const ponerLetra = () => {
        setLetterPos(currentLetter => {
            const nextLetter = currentLetter + 1;
            const txt = data.txt.substring(0, nextLetter);
            setCurrentText(txt);
            return nextLetter;
        });
        saveTimeout(setTimeout(ponerLetra, 50));
    }

    useEffect(() => {
        if (timeout) clearTimeout(timeout);
        setLetterPos(0);
        setCurrentText('');
        ponerLetra();
    }, [data.txt]);

    return (
        <TextPanel
            x={data.x}
            y={data.y}
            maxWidth={data.maxWidth}
            size={data.size}
        >
            {currentTxt}
        </TextPanel>
    )
}