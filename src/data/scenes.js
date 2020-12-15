import dialog1 from '../img/dialogo1.png';
import dialog2 from '../img/dialogo2.png';

import main from '../img/portada.png';
import scene1 from '../img/imagen1.png';
import scene2 from '../img/imagen2.png';
import scene3 from '../img/imagen3.png';
import scene4 from '../img/imagen4.png';
import scene5 from '../img/imagen5.png';
import scene6 from '../img/imagen6.png';
import scene7 from '../img/imagen7.png';
import scene8 from '../img/imagen8.png';
//..... S C E N E    9 - 9.4
import scene91 from '../img/imagen9-1.png';
import scene92 from '../img/imagen9-2.png';
import scene93 from '../img/imagen9-3.png';
import scene94 from '../img/imagen9-4.png';

//.... S C E N E    10 - 10.3
import scene101 from '../img/imagen10-1.png';
import scene102 from '../img/imagen10-2.png';
import scene103 from '../img/imagen10-3.png';

//....
import scene11 from '../img/imagen11.png';
import scene12 from '../img/imagen12.png';

//...
import continuara from '../img/Continuara.png'

export default [
    {
        "title": "main",
        "background": main,
        "txts": [
            {
                "txt": " ",
                "txtBackground": "",
                'nameVisible': false,
                'isLeft': null,
                "size": 0,
                "x": 40,
                "y": 0,
                "maxWidth": 30,
            }
        ],
        "doors": [
            {
                "type": "square",
                "x": 0,
                "y": 0,
                "isOption": false,
                "width": 100,
                "height": 100,
                "target": "scene1"
            }
        ]
    },
    {
        "title": "scene1",
        "background": scene1,
        "txts": [
            {
                "txt": "¿Dónde estoy? ... ",
                "txtBackground": dialog1,
                'nameVisible': true,
                'isLeft': true,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        "doors": [
            {
                "type": "square",
                "x": 0,
                "y": 75,
                "isOption": false,
                "width": 100,
                "height": 25,
                "target": "scene2"
            }
        ]
    },
    {
        "title": "scene2",
        "background": scene2,
        "txts": [
            {
                "txt": "Vaya, se ha hecho de noche... ¿Dónde estarán mis padres? ",
                "txtBackground": dialog1,
                'nameVisible': true,
                'isLeft': true,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        "doors": [
            {
                "type": "square",
                "x": 0,
                "y": 75,
                "isOption": false,
                "width": 100,
                "height": 25,
                "target": "scene3"
            }
        ]
    },
    {
        "title": "scene3",
        "background": scene3,
        "txts": [
            {
                "txt": "(Se oye un ruido entre los árboles) ",
                "txtBackground": dialog1,
                'nameVisible': false,
                'isLeft': null,
                "x": 25,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        "doors": [
            {
                "type": "square",
                "x": 0,
                "y": 75,
                "isOption": false,
                "width": 100,
                "height": 25,
                "target": "scene4"
            }
        ]
    },
    {
        "title": "scene4",
        "background": scene4,
        "txts": [
            {
                "txt": "¿Qu... quee ees eso?",
                "txtBackground": dialog1,
                'nameVisible': true,
                'isLeft': true,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        "doors": [
            {
                "type": "square",
                "x": 0,
                "y": 75,
                "isOption": false,
                "width": 100,
                "height": 25,
                "target": "scene5"
            }
        ]
    },
    {
        "title": "scene5",
        "background": scene5,
        "txts": [
            {
                "txt": "¿Será un lobo? por favor, dime que no...",
                "txtBackground": dialog1,
                'nameVisible': true,
                'isLeft': true,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        "doors": [
            {
                "type": "square",
                "x": 0,
                "y": 75,
                "isOption": false,
                "width": 100,
                "height": 25,
                "target": "scene6"
            }
        ]
    },
    {
        "title": "scene6",
        "background": scene6,
        "txts": [
            {
                "txt": "Y si ha venido para darme como alimento a su manada...",
                "txtBackground": dialog1,
                'nameVisible': true,
                'isLeft': true,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        "doors": [
            {
                "type": "square",
                "x": 0,
                "y": 75,
                "isOption": false,
                "width": 100,
                "height": 25,
                "target": "scene7"
            }
        ]
    },
    {
        "title": "scene7",
        "background": scene7,
        "txts": [
            {
                "txt": "Se está acercando a mí... ¿Qué hago?",
                "txtBackground": dialog1,
                'nameVisible': true,
                'isLeft': true,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        "doors": [
            {
                "type": "square",
                "x": 0,
                "y": 75,
                "isOption": false,
                "width": 100,
                "height": 25,
                "target": "scene8"
            }
        ]
    },
    {
        "title": "scene8",
        "background": scene8,
        "txts": [
            {
                "txt": " ",
                "txtBackground": dialog1,
                'nameVisible': true,
                'isLeft': true,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        'doors': [
            {
                "type": "square",
                "isOption": true,
                "text": "a) Hacerme la muerta",
                "x": "10",
                "y": "78",
                "width": "80",
                "height": "8",
                "target": "scene9-1"
            },
            {
                "type": "square",
                "isOption": true,
                "text": "b) Coger un palo para protegerme",
                "x": "10",
                "y": "88",
                "width": "80",
                "height": "8",
                "target": "scene10-1"
            }
        ]
    },
    {
        "title": "scene9-1",
        "background": scene91,
        "txts": [
            {
                "txt": " ",
                "txtBackground": '',
                'nameVisible': false,
                'isLeft': null,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        'doors': [
            {
                "type": "square",
                "isOption": false,
                "text": "",
                "x": "0",
                "y": "0",
                "width": "100",
                "height": "100",
                "target": "scene9-2"
            }
        ]
    },
    {
        "title": "scene9-2",
        "background": scene92,
        "txts": [
            {
                "txt": "¿Se ha ido ya? ",
                "txtBackground": dialog1,
                'nameVisible': true,
                'isLeft': true,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        'doors': [
            {
                "type": "square",
                "isOption": false,
                "text": "",
                "x": "0",
                "y": "75",
                "width": "100",
                "height": "25",
                "target": "scene9-3"
            }
        ]
    },
    {
        "title": "scene9-3",
        "background": scene93,
        "txts": [
            {
                "txt": "¿Estás bien? .... ¿Qué haces? ",
                "txtBackground": dialog2,
                'nameVisible': true,
                'isLeft': false,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        'doors': [
            {
                "type": "square",
                "isOption": false,
                "text": "",
                "x": "0",
                "y": "75",
                "width": "100",
                "height": "25",
                "target": "scene9-4"
            }
        ]
    },
    {
        "title": "scene9-4",
        "background": scene94,
        "txts": [
            {
                "txt": "¡¡¡Pero si eres adorable!!! Perdóname...",
                "txtBackground": dialog1,
                'nameVisible': true,
                'isLeft': true,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        'doors': [
            {
                "type": "square",
                "isOption": false,
                "text": "",
                "x": "0",
                "y": "75",
                "width": "100",
                "height": "25",
                "target": "scene11"
            }
        ]
    },
    {
        "title": "scene10-1",
        "background": scene101,
        "txts": [
            {
                "txt": "¡Quieto ahí! ... ¡No des ni un paso más o te golpeo!",
                "txtBackground": dialog1,
                'nameVisible': true,
                'isLeft': true,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        'doors': [
            {
                "type": "square",
                "isOption": false,
                "text": "",
                "x": "0",
                "y": "75",
                "width": "100",
                "height": "25",
                "target": "scene10-2"
            }
        ]
    },
    {
        "title": "scene10-2",
        "background": scene102,
        "txts": [
            {
                "txt": "¿Por qué me atacas?",
                "txtBackground": dialog2,
                'nameVisible': true,
                'isLeft': false,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        'doors': [
            {
                "type": "square",
                "isOption": false,
                "text": "",
                "x": "0",
                "y": "75",
                "width": "100",
                "height": "25",
                "target": "scene10-3"
            }
        ]
    },
    {
        "title": "scene10-3",
        "background": scene103,
        "txts": [
            {
                "txt": "¡¡¡Pero si eres adorable!!! Perdóname ...",
                "txtBackground": dialog1,
                'nameVisible': true,
                'isLeft': true,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        'doors': [
            {
                "type": "square",
                "isOption": false,
                "text": "",
                "x": "0",
                "y": "75",
                "width": "100",
                "height": "25",
                "target": "scene11"
            }
        ]
    },
    {
        "title": "scene11",
        "background": scene11,
        "txts": [
            {
                "txt": "¿Qué especie de animal eres?",
                "txtBackground": dialog1,
                'nameVisible': true,
                'isLeft': true,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        'doors': [
            {
                "type": "square",
                "isOption": false,
                "text": "",
                "x": "0",
                "y": "75",
                "width": "100",
                "height": "25",
                "target": "scene12"
            }
        ]
    },
    {
        "title": "scene12",
        "background": scene12,
        "txts": [
            {
                "txt": "¿Que es eso ...? ¿Se come?",
                "txtBackground": dialog2,
                'nameVisible': true,
                'isLeft': false,
                "x": 5,
                "y": 25,
                "size": 2,
                "maxWidth": 30,
            }
        ],
        'doors': [
            {
                "type": "square",
                "isOption": false,
                "text": "",
                "x": "0",
                "y": "75",
                "width": "100",
                "height": "25",
                "target": "continuara"
            }
        ]
    },
    {
        "title": "continuara",
        "background": continuara,
        "txts": [
            {
                "txt": "",
                "txtBackground": '',
                'nameVisible': '',
                'isLeft': '',
                "x": 0,
                "y": 0,
                "size": 0,
                "maxWidth": 0,
            }
        ],
        'doors': [
            {
                "type": "square",
                "isOption": false,
                "text": "",
                "x": "0",
                "y": "0",
                "width": "0",
                "height": "0",
                "target": ""
            }
        ]
    }
];