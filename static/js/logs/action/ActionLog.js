import axios from "axios";
import { getUseridFromCookie } from "../../libs/Cookie";
import { getUrl, getLogParamInfo } from "../BaseLog";

export const log = (props) => {
  let url = getUrl();

  // eslint-disable-next-line array-callback-return
  Object.keys(props).map((busParam) => {
    let { logParam, logValue } = getLogParamInfo(busParam, props[busParam]);
    url += "&" + logParam + "=" + logValue;
  });

  // 日志增加userid
  let { logParam, logValue } = getLogParamInfo("userid", getUseridFromCookie());
  url += "&" + logParam + "=" + logValue;

  send(url);
};

const send = (url) => {
  axios({
    url: url,
    method: "get",
  });

  return true;
};
