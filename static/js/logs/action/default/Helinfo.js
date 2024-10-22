import { getCookie } from "@/libs/Cookie";
import { log as actionLog } from "../ActionLog";
import { getCurrentUrl } from "../../../libs/UrlUtils";
import { getChannelCode } from "../../../libs/channel";
import { getClient } from "../../../libs/EnvUtils";

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
    act: "a013001",
  });
};
