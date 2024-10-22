import { uuid } from "vue-uuid";
import { getQueryString } from "./HttpUtils";

export const setCookie = (key, value, expiredays) => {
  const d = new Date();
  d.setTime(d.getTime() + (expiredays || 1) * 24 * 60 * 60 * 1000);
  const expires = ";expires=" + d["toGMTString"]();
  const domain =
    process.env.NODE_ENV === "development" ? "localhost" : ".bbqk.com";
  document.cookie = key + "=" + value + expires + ";path=/;domain=" + domain;
};

export const getCookie = (key) => {
  let arrStr = document.cookie.split("; ");
  for (let i = 0; i < arrStr.length; i++) {
    let temp = arrStr[i].split("=");
    if (temp[0] === key) return unescape(temp[1]);
  }
  return "";
};

export const getUseridFromCookie = () => {
  let userid = getCookie("userid");
  if (userid) {
    setCookie("userid", userid);
  } else {
    setCookie("userid", uuid.v1());
  }
  return getCookie("userid");
};

export const initCookie = (channel, page) => {
  // 设置渠道信息
  setCookie("channel", channel);
  // 设置页面信息
  setCookie("page", page);
  // 设置uid
  let uid = getQueryString("uid");
  setCookie("uid", uid ? uid : "-");

  // 设置userid
  let userid = getCookie("userid");
  if (userid) {
    setCookie("userid", userid);
  } else {
    setCookie("userid", uuid.v1());
  }
};
