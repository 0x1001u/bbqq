import {IMG_DEF_TAG_RIGHT_ARROW} from "../../../../libs/constant/Haierrsq";
import {jump} from "../../../../libs/HttpUtils";

const MiTag = (props) => {
    let {tags} = props;
    return (
            <div className="haierrsq-wrap_tag">
                {
                    tags.map((item, index) => frame(item, index, tags.length))
                }
            </div>
    )
}

const frame = (item, index, len) => {
    item.id = 'haierrsq-tag-' + index;
    return (
        <div className="haierrsq-wrap_tag_item-wrap"
             key={item.id}
             onClick={() => {
                 jump(item['jumpUrl']);
             }}>
            <div className="haierrsq-wrap_tag_item">
                <div className="haierrsq-wrap_tag_item_title">
                    {/*{item.icon && <img className="xiaomi-wrap_tag_item_title_img" src={item.icon} alt={item.id}/>}*/}
                    {
                        tagWarp(item)
                    }
                </div>
                <img className="haierrsq-wrap_tag_item_right"
                         src={IMG_DEF_TAG_RIGHT_ARROW} alt="ra"/>

            </div>
            {((index+1) !== len) &&<hr className="haierrsq-wrap_tag_item_hr"/>}
        </div>
    )
};

const tagWarp = (item) => {
    return (
        <div key={item.id}>
            <div className="haierrsq-wrap_tag_item_title_name">{item.name}</div>
        </div>
    )
}

export default MiTag;
