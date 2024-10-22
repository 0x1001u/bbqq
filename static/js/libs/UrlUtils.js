import { getQueryString } from "./HttpUtils";
import { isWx } from "./EnvUtils";
import { getCookie } from "./Cookie";

// ----------------------------------------------------------- 解析url ---
const REGS = {
  // ${url|uid},从url的参数中获取uid
  url: function (url) {
    let reg = /\$\{url\|(.+?)\}/;
    let result = url.match(reg);
    if (!result) return url;

    let ori = result[0];
    let paramName = result[1];
    let uid = getQueryString(paramName);
    return url.replace(ori, uid);
  },
  // ${cookie|cid},从cookie中获取cid
  cookie: function (url) {
    let reg = /\$\{cookie\|(.+?)\}/;
    let result = url.match(reg);
    if (!result) return url;

    let ori = result[0];
    let paramName = result[1];
    let value = getCookie(paramName);
    if (value) {
      return url.replace(ori, value);
    } else {
      return "";
    }
  },
  // ${wnw},判断客户端是否为微信
  wnw: function (url) {
    let reg = /\$\{wnw\}/;
    let result = url.match(reg);
    if (!result) return url;

    let ori = result[0];
    if (isWx()) {
      return url.replace(ori, "wx");
    } else {
      return url.replace(ori, "nonwx");
    }
  },
};

export const parseUrl = (url) => {
  for (let key in REGS) {
    url = REGS[key](url);
  }
  return url;
};
// -----------------------------------------------------------------------

// --------------------------------------------------------- 得到当前url ---

export const getCurrentUrl = () => {
  let url = window.location.href;
  let check = checkSignAtTheEnd(url);

  if (!check) return url;

  let len = url.length;
  return url.substr(0, len - 1);
};

// 如果url地址以#号结尾，返回true
const checkSignAtTheEnd = (url) => {
  let reg = /(.+(?=[#]$))/g;
  return reg.test(url);
};

// -----------------------------------------------------------------------
