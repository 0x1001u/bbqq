import axios from "axios";
import { getCookie } from "@/libs/tools";
import { GetQueryString } from "@/libs/tools";

if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = window.tempConfig.jsonUrl;
  axios.defaults.crossDomain = true;
  axios.defaults.withCredentials = false;
}
export const getTemp = (params) => {
  const tempConfig = window.tempConfig;
  const reg = /([0-9a-zA-Z]*?)+(.html)$/g;
  const pathname = window.location.pathname;
  const temp = pathname.match(reg)[0].replace(".html", "");
  return axios({
    url: tempConfig[temp] + "?t=" + new Date().getTime(),
    method: "get",
    params,
  });
};

export const getJsonData = (path) => {
  // eslint-disable-next-line no-template-curly-in-string
  if (path.includes("${url|uid}")) {
    const uid = GetQueryString("uid");
    // eslint-disable-next-line no-template-curly-in-string
    path = path.replace("${url|uid}", uid);
    // eslint-disable-next-line no-template-curly-in-string
  } else if (path.includes("${cookie|uid}")) {
    const uid = getCookie("uid");
    // eslint-disable-next-line no-template-curly-in-string
    path = path.replace("${cookie|uid}", uid);
  }
  return axios({
    url: path + "?t=" + new Date().getTime(),
    method: "get",
  });
};
export const getAxiosAll = (promiseArray) => {
  return axios.all(promiseArray);
};

export const getWxJsConfig = (params) => {
  return axios({
    url: "https://wxjs.bbqk.com/weixin/jsapi",
    method: "get",
    params,
  });
};
