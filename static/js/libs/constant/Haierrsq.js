import {isPro} from "../EnvUtils";

const BASE_PATH = isPro() ? "https://demo.pzjdimg.com/" : "https://demo.pzjdimg.com/";

// 默认标签右侧使用的箭头图标
export const IMG_DEF_TAG_RIGHT_ARROW = BASE_PATH + "custom/haierrsq/imgs/rarrow.png";
export const IMG_BOTTOM = BASE_PATH + "custom/haierrsq/imgs/bottom.png";
export const PLAY_BOTTOM = BASE_PATH + "custom/haierrsq/imgs/play.png";
