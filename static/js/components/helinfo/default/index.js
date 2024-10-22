import {useEffect, useState} from "react";
import {RecordWarp} from './style'
import Dialog from './dialog';
import {log} from "../../../logs/action/default/Helinfo";
import {getJson} from "../../../libs/HttpUtils";
import {parseUrl} from "../../../libs/UrlUtils";

const Helinfo = (props) => {
    const [state, setState] = useState({});
    const [params, setParams] = useState([]);
    const [titles, setTitles] = useState([]);
    const [body, setBody] = useState([]);

    const [dialogVisible, setDialogVisible] = useState(false);
    const [normalVisible, setNormalVisible] = useState(false);
    const [cancelVisible, setCancelVisible] = useState(false);
    const [unpublishVisible, setUnpublishVisible] = useState(false);

    useEffect(() => {
        (async () => {
            const {data} = await getJson(parseUrl(props.json));
            if ("0" === data.status) {
                setCancelVisible(true);
            } else if ("3" === data.status) {
                setUnpublishVisible(true);
            } else {
                // status = 1
                setNormalVisible(true);
            }
            setState(data);
        })()
    }, [props]);

    useEffect(() => {
        normalVisible && (async () => {
            if (state.ext) {
                const {data: ext} = await getJson(parseUrl(state.ext));
                setTitles(ext.titles)
                setBody(ext.datas)
            }
            if (typeof state.params == 'object') {
                setParams(state.params);
            }
            if (typeof state.params == 'string') {
                setParams(JSON.parse(state.params));
            }
        })()
    }, [state, normalVisible]);

    // 点击“查看详情”的行为日志
    useEffect(() => {
        dialogVisible && (async () => log())();
    }, [dialogVisible]);

    return (
        <RecordWarp>
            <div className={unpublishVisible ? "left" : "hidden"}>
                <h1>
                    中国能效标识
                </h1>
                <p>
                    <label>该型号正在备案中</label>
                </p>
            </div>
            <div className={cancelVisible ? "left" : "hidden"}>
                <h1>
                    中国能效标识
                </h1>
                <p>
                    <label>该型号备案已撤销</label>
                </p>
                <p>
                    <label>撤销原因:质量抽查能效不合格</label>
                </p>
                <p>
                    <label>详情请访问“中国能效标识网”查询</label>
                </p>
                <p>
                    <label>网址：https://www.energylabelrecord.com</label>
                </p>
            </div>
            <div className={normalVisible ? "left" : "hidden"}>
                <h1>
                    中国能效标识
                </h1>
                <p>
                    <label>型号：</label>
                    <span>{state.model}</span>
                </p>
                <p>
                    <label>备案号：</label>
                    <span>{state.recordno}</span>
                </p>
                <p>
                    <label>公告时间：</label>
                    <span>{state.pubdate}</span>
                </p>
                <p>
                    <label>生产者名称：</label>
                    <span>{state.producer}</span>
                </p>
            </div>
            <div className={normalVisible ? "right" : "hidden"}>
                <img alt={`能效${state.level}级`}
                     src={`https://www.pzjdimg.com/bbqk/img/level${state.level ? state.level : 1}.png`}/>
                <div onClick={() => setDialogVisible(true)}>查看详情 &gt;</div>
            </div>
            <Dialog
                visble={dialogVisible}
                onClose={() => setDialogVisible(false)}
            >
                <div className="extendBlock">
                    <p className="statement">
                        <img alt="" src="https://www.pzjdimg.com/bbqk/img/20191126/plaintIcon.png"/>
                        能效标识上的所有信息源于企业自我声明
                    </p>
                    <div className="recodeParamWrap">
                        <h2>备案参数</h2>
                        <div id="first" className="paramInfo">

                            {params.length > 0 && params.map((item, idx) => {
                                return (
                                    <div className="listItem" key={item.d + idx}>
                                        <p className="itemKey" dangerouslySetInnerHTML={{__html:item.d}}/>
                                        <span className="itemVal">{item.v}</span>
                                    </div>
                                )
                            })}
                        </div>

                    {
                        titles.length > 0 && <table>
                                <thead>
                                <tr>
                                    {titles.map((item, index) => (<th key={item.k + (index * 21)}>{item.d}</th>))}
                                </tr>
                                </thead>
                                <tbody>
                                {body.length > 0 && body.map((tritem, tridx) => {
                                    return (
                                        <tr key={tridx + 100}>
                                            {tritem.map((tditem, index) => (
                                                <td key={tditem.k + (index * 10)}>{tditem.v}</td>))}
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                    }
                    </div>
                </div>
            </Dialog>
        </RecordWarp>
    )
}

export default Helinfo;
