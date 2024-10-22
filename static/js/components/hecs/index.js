import {useEffect, useState} from "react";
import {CarbonReductionWarp} from "./style";
import {getJson} from "../../libs/HttpUtils";
import {parseUrl} from "../../libs/UrlUtils";
import {HECS_IMG_1} from "../../libs/constant/Default";

const Hecs = (props) => {
    const [title, setTitle] = useState('');
    const [num, setNum] = useState([]);
    const [unit, setUnit] = useState([]);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        (async () => {
            const {data: {name, num, unit, visible}, status} = await getJson(parseUrl(props.json));
            if (status !== 200) return;

            setTitle(name);
            setNum(num);
            setUnit(unit);
            setVisible(visible);
        })()
    }, [props]);
    return (

        visible && <CarbonReductionWarp>
            <h2>{title}:<i>{num}</i>{unit}</h2>
            <img src={HECS_IMG_1} alt="HECS_IMG_1"/>
        </CarbonReductionWarp>

    )
}

export default Hecs;
