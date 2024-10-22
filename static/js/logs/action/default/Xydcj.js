import { log as actionLog } from "../ActionLog";
import { getCookie } from "../../../libs/Cookie";
import { getCurrentUrl } from "../../../libs/UrlUtils";
import { getClient } from "../../../libs/EnvUtils";
import { getChannelCode } from "../../../libs/channel";

/**
 * 所属渠道：通用
 * 所属页面：home(首页)
 * 所属模板：大众版
 * 所属模块：活动_幸运大抽奖悬浮按钮
 * 记录内容：按钮点击
 */
export const log = () => {
  actionLog({
    uid: getCookie("uid"),
    model: getCookie("model"),
    cid: getCookie("cid"),
    bid: getCookie("bid"),
    eid: getCookie("eid"),
    url: getCurrentUrl(),
    level: getCookie("level"),
    channel: getChannelCode(),
    client: getClient(),
    page: "p1",
    method: "m3",
    act: "a013xydcj",
  });
};
