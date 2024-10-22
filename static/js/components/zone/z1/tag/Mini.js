/**
 * 所属渠道：通用
 * 所属页面：home(首页)
 * 所属模板：个性化版_模板1
 * 所属模块：标签
 * 展示内容：小程序标签
 */
import {useEffect} from "react";
import {IMG_DEF_TAG_RIGHT_ARROW} from "../../../../libs/Constants";
import {log} from "../../../../logs/action/t1/Tag";

const Mini = (props) => {
    let {item, tagType} = props;

    useEffect(() => {
        (async () => {
            const btn = document.getElementById('launch-btn');
            btn.addEventListener('launch', function () {
                log(item.id, tagType);
            });
        })();
    }, [item.id, props, tagType]);

    return (
        item &&
        <div className="brandinfo1-wrap_tag_item-wrap"
             key={item.title}>
            <div className="brandinfo1-wrap_tag_item">
                <div className="brandinfo1-wrap_tag_item_title">
                    <img className="brandinfo1-wrap_tag_item_title_img" src={item.icon} alt={item.title}/>
                    <span className="brandinfo1-wrap_tag_item_title_name">{item.title}</span>
                </div>
                <img className="brandinfo1-wrap_tag_item_right" src={IMG_DEF_TAG_RIGHT_ARROW} alt="ra"/>
            </div>
            <wx-open-launch-weapp
                id="launch-btn"
                username={item.miniapp.id}
                path={item.miniapp.path}
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
            >
                <script type="text/wxtag-template">
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0
                    }}/>
                </script>
            </wx-open-launch-weapp>
        </div>
    )
}

export default Mini;
