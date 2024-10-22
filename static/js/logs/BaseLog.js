import Base64 from "base-64";
import { isDev } from "../libs/EnvUtils";

const URL =
  "https://com-bbqk-el.cn-beijing.log.aliyuncs.com/logstores" +
  "/ela/track_ua.gif?APIVersion=0.6.0";

// 业务参数与日志参数的映射关系
const PARAM_NAME_MAP = {
  // 业务信息
  uid: "a",
  model: "b",
  cid: "c",
  bid: "d",
  eid: "e",
  userid: "f",
  wxopenid: "g",
  wxunionid: "h",
  url: "i",
  level: "j",
  // 来源信息
  channel: "x1",
  page: "x2",
  method: "x3",
  act: "x4",
  client: "x5",
  // 其它信息
  chain: "z",
};

// 日志参数值需要加密请求的日志参数名
const ENCRYPTION_PARAM = ["x1", "x2", "x3", "x4", "x5"];

export const getUrl = () => {
  return URL;
};

// 根据业务参数信息，得到日志参数信息
// busParam:业务参数名
// busValue:业务参数值
export const getLogParamInfo = (busParam, busValue) => {
  let logParam = PARAM_NAME_MAP[busParam];
  let logValue = busValue;

  if (ENCRYPTION_PARAM.includes(logParam) && !isDev()) {
    logValue = Base64.encode(logValue);
  }

  return { logParam: logParam, logValue: logValue };
};
