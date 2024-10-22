import { getCookie } from "../../../libs/Cookie";
import { log as actionLog } from "../ActionLog";
import { getCurrentUrl } from "../../../libs/UrlUtils";
import { getChannelCode } from "../../../libs/channel";
import { getPageCode } from "../../../libs/Page";
import { getClient } from "../../../libs/EnvUtils";

/**
 * 所属渠道：通用
 * 所属页面：通用
 * 所属模块：快捷入口
 * 记录内容：快捷入口点击
 */
export const log = (id) => {
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
    page: getPageCode(),
    method: "m3",
    act: "a013navi_" + id,
  });
};
