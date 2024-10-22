import {useEffect, useState} from "react";
import {MiWarp} from './style';
import Slider from './slider';
import MiTag from './tag';
import {parseUrl} from '../../../libs/UrlUtils';
import {getJson, jump} from '../../../libs/HttpUtils';
import {log} from '../../../logs/action/mi/Banner';

let slider = [];
let tags = [];
let banner = [];
let miData = undefined;

const Mi = (props) => {
    const [visible, setVisible] = useState(false);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        (async () => {
            let {data: info} = await getJson(parseUrl(props.json));
            slider = info.slider;
            tags = info.tags;
            banner = info.banner;

            let {data: tempData} = await getJson(parseUrl(info.resource));
            if(0 !== Object.keys(tempData).length) {
                setVisible(true);
                miData = tempData;
            }

            setFlag(true);
        })();
    }, [props]);

    return (
        <MiWarp>
            <div className="template-bg">
                {visible && miData && <MiTag tags={tags} data={miData}/>}

                {flag && slider?.length > 0 && <Slider list={slider} data={miData}/>}

                <img className="xiaomi-img-wrap"
                     src={banner.img}
                     onClick={() => bannerClickTrigger(banner)}
                     alt=""/>
            </div>
        </MiWarp>
    )
};

// 点击Banner图触发的事件
const bannerClickTrigger = (banner) => {
    log(banner.id);
    jump(banner.link);
};

export default Mi;


