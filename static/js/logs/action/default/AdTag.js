/**
 * 所属渠道：通用
 * 所属页面：通用
 * 所属模块：滚动广告栏
 * 记录内容：广告点击
 */
import {getCookie} from '@/libs/Cookie'
import {log as actionLog} from "../ActionLog";
import { getCurrentUrl } from '../../../libs/UrlUtils';
import {getChannelCode} from "../../../libs/channel";
import {getPageCode} from "../../../libs/Page";
import {getClient} from "../../../libs/EnvUtils";

// act：广告id
export const log = (act) => {
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
        act: "a01" + act
    });
}
