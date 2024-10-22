let imgPublicPath = window?.tempConfig?.imgUrl
export default imgPublicPath;

export const random = (length) => {
    return Math.random().toString(36).substr(3, length);
}
