import {log as actionLog} from "../ActionLog";
import {getCookie} from '../../../libs/Cookie'
import {getCurrentUrl} from '../../../libs/UrlUtils';
import {getChannelCode} from "../../../libs/channel";
import {getClient} from "../../../libs/EnvUtils";

/**
 * 所属渠道：通用
 * 所属页面：home(首页)
 * 所属模板：个性化版_模板1
 * 所属模块：标签
 * 记录内容：标签点击
 *
 * @param id
 * @param tagType
 */
export const log = (id, tagType) => {
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
        act: "a113" + tagType + "_" + id
    });
}

// 固定标签
export const TAG1 = "tag1";
// 自定义标签
export const TAG2 = "tag2";
