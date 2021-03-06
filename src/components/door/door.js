import { Door, Texto } from './door-style';

export default ({ data, changeScene }) =>
    <Door onClick={() => changeScene(data.target)}
        y={data.y}
        x={data.x}
        width={data.width}
        height={data.height}
        isOption={data.isOption}
    >
        {data.isOption ? <Texto>{data.text}</Texto> : ""}
    </Door>