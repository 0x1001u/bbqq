import React, {useState, useEffect} from 'react';
import {getTemp, getJsonData} from '@/api';
import {log} from "../../../logs/action/default/Home";
import Navi from "../../../components/navi";
import {parseUrl} from "../../../libs/UrlUtils";
import {getJson, jump} from "../../../libs/HttpUtils";
import {setCookie} from '../../../libs/Cookie';
import Wp from "../../../components/wp";
import {assemble} from "../../../libs/Widget";

let count = null;
let widgetArray = [];
let wpData = null;
let navData = null;

const Home = () => {
    const [open, setOpen] = useState(false);
    const [components, setComponents] = useState([]);
    useEffect(() => {
        (async () => {
            const {data, status} = await getTemp();
            if (status !== 200) return;

            let {status: pageStatus, navi, wp, url, widgets, idx} = data;
            if (pageStatus === 2) {
                jump(parseUrl(url));
            }
            const {data: wpResult} = wp ? await getJsonData(wp) : ''
            const {data: navResult} = navi && await getJsonData(navi)
            let {data: idxResult} = idx ? await getJson(parseUrl(idx)) : '';

            wpData = wpResult;
            widgetArray = widgets;
            count = wpResult?.times;
            navData = navResult;
            setOpen(!!wpResult);

            // 初始化cookie
            idxResult && Object.keys(idxResult).forEach((key) => {
                setCookie(key, idxResult[key]);
            });

            // 组装页面组件
            setComponents(assemble(widgetArray));

            // 记录页面打开日志
            log();
        })()
    }, []);

    return (
        <>
            {open && <Wp wpData={wpData} count={count} setOpen={setOpen}/>}

            <div className="home" style={{display: open ? 'none' : 'block'}}>
                {navData && <Navi navDatas={navData}/>}
                <article className="content">
                    {components}
                </article>

            </div>
        </>
    );
}


export default Home;
