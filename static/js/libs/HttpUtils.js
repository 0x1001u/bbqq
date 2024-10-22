import axios from "axios";

export const getJson = (path) => {
  return axios({
    url: path + "?t=" + new Date().getTime(),
    method: "get",
  });
};

export const postJson = (path) => {
  return axios({
    url: path,
    method: "post",
  });
};

export const getQueryString = (name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
};

export const jump = (link) => {
  if (link && link !== "") {
    window.location.href = link;
  }
};
