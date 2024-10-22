import { getCookie } from "./Cookie";

export const HOME = "home";
export const FEATURE = "feature";
export const CERT = "cert";

// 页面信息
const PAGES = {
  unknown: "p0",
  home: "p1",
  feature: "p2",
  cert: "p3",
};

export const getPageCode = () => {
  // 先从cookie中获取页面信息
  let page = getCookie("page");
  return page ? PAGES[page] : "p0";
};
