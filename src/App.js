import { useState, useEffect } from 'react';
import scenes from './data/scenes';
import Scene from './components/home/home';
import Door from './components/door/door';
import Txt from './components/Txt/txt';

export default () => {

    const getSceneByName = name => scenes.find(obj => obj.title == name)
    const [currentScene, setCurrentScene] = useState(getSceneByName('main'));


    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const calculateSceneDimensions = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const a = 16;
        const b = 9;
        const proportion = a / b;
        const proportion2 = w / h;

        if (proportion > proportion2) {
            setWidth(w);
            setHeight(w * b / a);
        } else {
            setHeight(h);
            setWidth(h * a / b);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', calculateSceneDimensions);
        calculateSceneDimensions();
    }, []);

    return (
        <Scene back={currentScene.background} width={width} height={height} dataImportant={currentScene.txts}>
            {//CHANGE SCENE
                currentScene.doors.map(obj => <Door changeScene={(scene) => setCurrentScene(getSceneByName(scene))} data={obj}></Door>
                )
            }
        </Scene>
    );
};