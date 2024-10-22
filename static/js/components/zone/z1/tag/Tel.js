/**
 * 所属渠道：通用
 * 所属页面：home(首页)
 * 所属模板：个性化版_模板1
 * 所属模块：标签
 * 展示内容：400电话标签
 */
import { IMG_DEF_TAG_RIGHT_ARROW } from "../../../../libs/Constants";
import { log } from "../../../../logs/action/t1/Tag";

const Tel = (props) => {
  let { item, tagType } = props;

  return (
    <div
      className="brandinfo1-wrap_tag_item-wrap"
      key={item.title}
      onClick={() => log(item.id, tagType)}
    >
      <a href={"tel:" + item.phone}>
        <div className="brandinfo1-wrap_tag_item">
          <div className="brandinfo1-wrap_tag_item_title">
            <img
              className="brandinfo1-wrap_tag_item_title_img"
              src={item.icon}
              alt={item.title}
            />
            <span className="brandinfo1-wrap_tag_item_title_name">
              {item.title}
            </span>
          </div>
          <img
            className="brandinfo1-wrap_tag_item_right"
            src={IMG_DEF_TAG_RIGHT_ARROW}
            alt="ra"
          />
        </div>
      </a>
    </div>
  );
};

export default Tel;
