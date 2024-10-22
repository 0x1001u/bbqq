// 页面：扫码首页
// 渠道：默认
import React from "react";
import ReactDOM from "react-dom";
import "../../../app.less";
import Frame from "./frame";
import { initCookie } from "../../../libs/Cookie";
import { HOME } from "../../../libs/Page";

// 初始化cookie信息
initCookie("default", HOME);

ReactDOM.render(
  <React.StrictMode>
    <Frame />
  </React.StrictMode>,
  document.getElementById("root")
);
