/**
 * 所属渠道：通用
 * 所属页面：home(首页)
 * 所属模板：个性化版_模板4
 * 所属模块：Banner图
 * 展示内容：Banner图
 */
import { useEffect, useState } from "react";
import { log } from "../../../../logs/action/t4/Qrcode";
import { jump } from "../../../../libs/HttpUtils";
import { isWx } from "../../../../libs/EnvUtils";

const Index = (props) => {
  const [qrcodeInfo, setQrcodeInfo] = useState({});
  const [miniapp, setMiniapp] = useState({});
  const [qrcodeImgUrl, setQrcodeImgUrl] = useState("");

  useEffect(() => {
    (async () => {
      let { info: qrcodeInfo } = props;
      setQrcodeInfo(qrcodeInfo);
      setMiniapp(qrcodeInfo.miniapp);
      setQrcodeImgUrl(qrcodeInfo.img);

      if (isWx() && miniapp && miniapp.id) {
        const btn = document.getElementById("launch-btn");
        btn.addEventListener("launch", function () {
          log();
        });
      }
    })();
  }, [miniapp, props]);

  if (isWx() && miniapp && miniapp.id) {
    return (
      <div className="position-relative">
        <img
          className="brandinfo4-wrap_long-tag_img-bg"
          src={qrcodeImgUrl}
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
        className="brandinfo4-wrap_long-tag_img-bg"
        src={qrcodeImgUrl}
        onClick={() => {
          log();
          jump(qrcodeInfo.link);
        }}
        alt="banner"
      />
    );
  }
};

export default Index;
