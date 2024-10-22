export const parseUrl = (url, data) => {
    let reg = /\$\{mi\|(.+?)\}/;
    let result = url.match(reg);
    if (!result) return url;

    let ori = result[0];
    let paramName = result[1];

    return url.replace(ori, data[paramName]);
}
