import {log as actionLog} from "../ActionLog";
import {getCookie} from '../../../libs/Cookie'
import {getCurrentUrl} from '../../../libs/UrlUtils';
import {getChannelCode} from "../../../libs/channel";
import {getClient} from "../../../libs/EnvUtils";

/**
 * 所属渠道：通用
 * 所属页面：home(首页)
 * 所属模板：个性化版_模板4
 * 所属模块：二维码图
 * 记录内容：二维码图点击
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
        act: "a413qrcode"
    });
}
