import {log as actionLog} from "../ActionLog";
import {getCookie} from '../../../libs/Cookie'
import {getCurrentUrl} from '../../../libs/UrlUtils';
import {getChannelCode} from "../../../libs/channel";
import {getClient} from "../../../libs/EnvUtils";

/**
 * 所属渠道：小米
 * 所属页面：home(首页)
 * 所属模板：定制版_小米1
 * 所属模块：通栏Banner图
 * 记录内容：Banner图点击
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
        act: "ami13banner"
    });
}
