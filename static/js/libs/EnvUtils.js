export const isWx = () => {
  let ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("micromessenger") !== -1;
};

export const getClient = () => {
  if (isDev()) return "local";

  return isWx() ? "wx" : "nonwx";
};

export const isDev = () => {
  return process.env.NODE_ENV === "development";
};

export const isDemo = () => {
  return process.env.NODE_ENV === "demo";
};

export const isPro = () => {
  return process.env.NODE_ENV === "production";
};
