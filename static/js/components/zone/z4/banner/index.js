/**
 * 所属渠道：通用
 * 所属页面：home(首页)
 * 所属模板：个性化版_模板4
 * 所属模块：Banner图
 * 展示内容：Banner图
 */
import { useEffect, useState } from "react";
import { log } from "../../../../logs/action/t4/Banner";
import { getCookie } from "../../../../libs/Cookie";
import { jump } from "../../../../libs/HttpUtils";
import { isWx } from "../../../../libs/EnvUtils";

const Index = (props) => {
  const [bannerInfo, setBannerInfo] = useState({});
  const [miniapp, setMiniapp] = useState({});
  const [bannerImgUrl, setBannerImgUrl] = useState("");

  useEffect(() => {
    (async () => {
      let { info: bannerInfo } = props;
      setBannerInfo(bannerInfo);
      setMiniapp(bannerInfo.miniapp);

      if (isWx() && miniapp && miniapp.id) {
        const btn = document.getElementById("launch-btn");
        btn.addEventListener("launch", function () {
          log();
        });
      }

      let cid = getCookie("cid");
      bannerInfo.img &&
        bannerInfo.img.forEach((aImg) => {
          if (aImg.cid === cid) {
            setBannerImgUrl(aImg.img);
          }
          if (aImg.cid === 0 && bannerImgUrl === "") {
            setBannerImgUrl(aImg.img);
          }
        });
    })();
  }, [bannerImgUrl, miniapp, props]);

  if (isWx() && bannerImgUrl && miniapp && miniapp.id) {
    return (
      <div className="position-relative">
        <img
          className="brandinfo4-img-wrap_img1"
          src={bannerImgUrl}
          alt="banner"
        />
        <wx-open-launch-weapp
          id="launch-btn"
          username={miniapp.id}
          path={miniapp.path}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <script type="text/wxtag-template">
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
              }}
            />
          </script>
        </wx-open-launch-weapp>
      </div>
    );
  } else {
    // 默认点击跳转链接
    return (
      <img
        className="brandinfo4-img-wrap_img1"
        src={bannerImgUrl}
        onClick={() => {
          log();
          jump(bannerInfo.link);
        }}
        alt="banner"
      />
    );
  }
};

export default Index;
