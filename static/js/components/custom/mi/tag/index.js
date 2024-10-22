import {jump} from "../../../../libs/HttpUtils";
import {parseUrl} from '../../../../libs/MiUrlUtils';
import {random} from '../../../../libs/util';
import {log} from '../../../../logs/action/mi/Tag';
import {IMG_DEF_TAG_RIGHT_ARROW} from "../../../../libs/constant/Mi";

const MiTag = (props) => {
    let {tags, data} = props;
    return (
        <div className="xiaomi-wrap" key={random(10)}>
            <div className="xiaomi-title">小米专区</div>
            <div className="xiaomi-wrap_tag">
                {
                    tags.map((item, index) => frame(item, data, index))
                }
            </div>
        </div>
    )
}

const frame = (item, data, index) => {
    // data中有miapptag属性，且属性值为false时，“链接米家app”不能点击且文字置灰
    let miapptagInvalid = ("t2" === item.id && undefined !== data.miapptag && !data.miapptag);
    return (
        <div className="xiaomi-wrap_tag_item-wrap"
             key={item.id}
             onClick={() => {
                 if(miapptagInvalid) return;
                 log(item.id);
                 // jump(parseUrl(item.link, data));
                 if(item.id === "t1") {
                     jump(data.manualUrl ? data.manualUrl : parseUrl(item.link, data));
                 } else {
                     jump(parseUrl(item.link, data));
                 }
             }}>
            <div className="xiaomi-wrap_tag_item">
                <div className="xiaomi-wrap_tag_item_title">
                    <img className="xiaomi-wrap_tag_item_title_img" src={
                        miapptagInvalid ? item.icon2 : item.icon
                    } alt={item.id}/>
                    {
                        tagWarp(item, miapptagInvalid)
                    }
                </div>
                <img className="xiaomi-wrap_tag_item_right"
                     src={IMG_DEF_TAG_RIGHT_ARROW} alt="ra"/>
            </div>
        </div>
    )
};

const tagWarp = (item, miapptagInvalid) => {
    if (item.desp?.length > 0) {
        return (
            <div key={item.id}>
                <div className="xiaomi-wrap_tag_item_title_name">{item.title}</div>
                <div className="clearfix xiaomi-wrap_tag_item_title_tag-wrap">
                    {item.desp.map((val, idx) => (
                        <span key={idx} className="xiaomi-wrap_tag_item_title_tag">{val}</span>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div key={item.id}>
                <div className={
                    miapptagInvalid ?
                        "xiaomi-wrap_tag_item_title_iname" :
                        "xiaomi-wrap_tag_item_title_name"
                }>{item.title}</div>
            </div>
        )
    }
}

export default MiTag;
