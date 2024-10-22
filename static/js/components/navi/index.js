import {useState, useEffect} from 'react';
import {NavWrap} from './style';
import {jump} from "../../libs/HttpUtils";
import {log} from "../../logs/action/default/Navi";
import {parseUrl} from "../../libs/UrlUtils";

/**
 * 所属渠道：通用
 * 所属页面：home(首页)
 * 所属模板：通用
 * 所属模块：快捷入口
 * 记录内容：快捷入口项点击
 *
 * navDatas：快捷入口数据项
 */
const Navi = ({navDatas}) => {
    let datas = navDatas;
    const [navList, setNavList] = useState([]);
    useEffect(() => {
        datas && (async () => {
            let temp = [];
            datas.forEach((nav) => {
                let {url} = nav;
                let key = url.match(/[^|]+(?=})/g)[0];
                let tempUrl = parseUrl(url);
                if(tempUrl) {
                    temp.push({
                        ...nav,
                        url: tempUrl,
                        id: key
                    });
                }
            })
            setNavList(temp);
        })()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        navList.length > 0 && <NavWrap>
            {navList.map(item => {
                return <a className={item.selected ? 'active' : ''}
                          key={item.id} onClick={() => {
                    log(item.id);
                    jump(item.url)
                }}>
                    {item.img ? <img src={item.img} alt={item.id}/> : item.name}
                </a>
            })}
        </NavWrap>
    )
}

export default Navi;
