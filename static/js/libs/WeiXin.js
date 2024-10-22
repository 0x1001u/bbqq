import axios from "axios";

export const getWxJsConfig = (params) => {
  return axios({
    url: "https://wxjs.bbqk.com/weixin/jsapi",
    method: "get",
    params,
  });
};

export const wxConfig = async (tag) => {
  const { data } = await getWxJsConfig({ url: window.location.href });
  window.wx.config({
    debug: false,
    appId: data.appId,
    timestamp: data.timestamp,
    nonceStr: data.nonceStr,
    signature: data.signature,
    jsApiList: [
      "scanQRCode",
      "updateAppMessageShareData",
      "updateTimelineShareData",
      "onMenuShareWeibo",
    ],
    openTagList: [tag],
  });
};
