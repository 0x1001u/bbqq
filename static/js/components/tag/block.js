/**
 * 所属组件：标签组件
 * 块信息：一组标签
 */
import {useEffect, useState} from "react";
import {BlockStyle} from "./style";
import DefTag from './def';
import {getCookie} from "../../libs/Cookie";
import {getJsonData} from "../../api";

const Block = (props) => {
    // {"name":xxx, "tags":[xxx]}
    const [block, setBlock] = useState({});
    const currCid = getCookie("cid");
    useEffect(() => {
        (async () => {
            if (props.data) {
                setBlock(props.data);
            } else {
                const {data} = await getJsonData(props.json);
                setBlock(data);
            }
        })()
    }, [props]);

    return (
        block && block.tags && block.tags.length > 0 ?
            <BlockStyle>
                <h2>{block.name} </h2>
                {
                    block.tags.map((item, index) => {
                        const {id, name, url, img, cids} = item;
                        // 如果cids不存在，或者当前扫码cid 存在于 cids中
                        if(!cids || cids.includes(currCid*1)) {
                            return (
                                <DefTag key={index} id={id} url={url} title={name} logo={img}/>
                            )
                        } else {
                            return <></>
                        }
                    })
                }
            </BlockStyle> : <></>
    )
}

export default Block;
