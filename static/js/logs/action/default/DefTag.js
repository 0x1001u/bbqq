import {getCookie} from '@/libs/Cookie'
import {log as actionLog} from "../ActionLog";
import { getCurrentUrl } from '../../../libs/UrlUtils';
import {getChannelCode} from "../../../libs/channel";
import {getPageCode} from "../../../libs/Page";
import {getClient} from "../../../libs/EnvUtils";

/**
 * 所属渠道：通用
 * 所属模块：默认Tag样式
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
        act: id
    });
}
