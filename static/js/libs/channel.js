import {getCookie, setCookie} from "./Cookie";

export const MI = "mi";

// 渠道信息
const CHANNELS = {
    // 业务信息
    "default":"c0",
    "haier":"c1",
    "midea":"c2",
    "gree":"c3",
    "meiling":"c4",
    "konka":"c5",
    "hisense":"c6",
    "aux":"c7",
    "vanward":"c8",
    "mi":"c9",
    "ronshen":"c10",
    "kelon":"c11",
    "hisensebx":"c12",
    "vatti":"c13",
    "mideaxyj":"c14",
    "littleswanxyj":"c15",
    "mideabx":"c16",
    "haierrsq":"c17",
};

export const getChannelCode = () => {
    // 先从cookie中获取渠道信息
    let channel = getCookie("channel");
    if(channel) return CHANNELS[channel];

    // 如果cookie中没有渠道信息，设置channel默认值
    channel = "default";

    // 从uri中获取渠道信息
    let pathname = window.location.pathname;
    pathname = pathname.substr(1);
    for(let key in CHANNELS){
        if(new RegExp("^"+key+".*$").test(pathname)) {
            channel = key;
            break;
        }
    }

    // 设置cookie中的channel值
    setCookie("channel", channel);

    return CHANNELS[channel];
}

