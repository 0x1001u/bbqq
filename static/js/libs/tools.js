export const GetQueryString = (name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
};

export const setCookie = (key, value, expiredays) => {
  const d = new Date();
  d.setTime(d.getTime() + (expiredays || 1) * 24 * 60 * 60 * 1000);
  const expires = ";expires=" + d["toGMTString"]();
  const domain =
    process.env.NODE_ENV === "development" ? "localhost" : ".bbqk.com";
  document.cookie = key + "=" + value + expires + ";path=/;domain=" + domain;
};

export const getCookie = (objName) => {
  let arrStr = document.cookie.split("; ");
  for (let i = 0; i < arrStr.length; i++) {
    let temp = arrStr[i].split("=");
    if (temp[0] === objName) return unescape(temp[1]);
  }
  return "";
};

// ----------------------------------------------------------------------------------

export const getQueryString = (name) => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
};

export const getCurrentUrl = () => {
  let url = window.location.href;
  let check = checkSignAtTheEnd(url);

  if (!check) return url;

  let len = url.length;
  return url.substr(0, len - 1);
};

export const getValue = (val, defVal) => {
  return val ? val : defVal;
};

export const isDev = () => {
  return process.env.NODE_ENV === "development";
};

export const isDemo = () => {
  return process.env.NODE_ENV === "demo";
};

// ----------------------------------------------------------------------------------
// 如果url地址以#号结尾，返回true
const checkSignAtTheEnd = (url) => {
  let reg = /(.+(?=[#]$))/g;
  return reg.test(url);
};
