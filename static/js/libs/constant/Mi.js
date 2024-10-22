import { isPro } from "../EnvUtils";

const BASE_PATH = isPro()
  ? "https://bbqk.pzjdimg.com/"
  : "https://demo.pzjdimg.com/";

// 默认标签右侧使用的箭头图标
export const IMG_DEF_TAG_RIGHT_ARROW = BASE_PATH + "custom/mi/imgs/rarrow.png";
