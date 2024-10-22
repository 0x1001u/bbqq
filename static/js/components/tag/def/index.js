/**
 * 所属组件：标签
 * 所属样式：默认
 * 样式名称：defTag
 */
import { ATagStyle } from "./style";
import { IMG_DEF_TAG_RIGHT_ARROW } from "../../../libs/Constants";
import { log } from "../../../logs/action/default/DefTag";

const DefTag = (props) => {
  const { id, title, url, logo } = props;

  // 点击广告触发的事件
  const trigger = (url) => {
    // 记录日志
    log(id ? id : "");
    // 执行页面跳转
    window.location.href = url;
  };

  return (
    <ATagStyle href="#" onClick={() => trigger(url)}>
      <span className="title">
        <img alt={title} src={logo} />
        {title}
      </span>
      {url && (
        <img className="right" alt="右箭头" src={IMG_DEF_TAG_RIGHT_ARROW} />
      )}
    </ATagStyle>
  );
};

export default DefTag;
