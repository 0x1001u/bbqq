import {isPro} from "../EnvUtils";

const TEMP_BASE_PATH = isPro() ? "https://bbqk.pzjdimg.com/temp/" : "https://demo.pzjdimg.com/temp/";
const IMG_BASE_PATH = isPro() ? "https://bbqk.pzjdimg.com/public/imgs/" : "https://demo.pzjdimg.com/public/imgs/";

// 二维码图片地址
export const DEFAULT_QRCODE_IMG_URL = TEMP_BASE_PATH + "imgs/d001/qrcode.png";

// Hecs组件图片
export const HECS_IMG_1 = IMG_BASE_PATH + "co2.png";
