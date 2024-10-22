import { useEffect, useState } from "react";
import { Brandinfo4Warp } from "./style";
import { parseUrl } from "../../../libs/UrlUtils";
import { getJson } from "../../../libs/HttpUtils";
import Slider from "./slider";
import Banner from "./banner";
import Qrcode from "./qrcode";
import { wxConfig } from "../../../libs/WeiXin";

const Brandinfo4 = (props) => {
  const [title, setTitle] = useState("");
  const [qrcode, setQrcode] = useState({});
  const [slide, setSlide] = useState({});
  const [banner, setBanner] = useState({});
  useEffect(() => {
    (async () => {
      let url = parseUrl(props.json);
      const {
        data: { title, qrcode, banner, slide },
      } = await getJson(url);

      let isLoadWx = false;
      if (banner && banner.miniapp && banner.miniapp.id) {
        isLoadWx = true;
      }
      if (qrcode && qrcode.miniapp && qrcode.miniapp.id) {
        isLoadWx = true;
      }
      if (isLoadWx) {
        await wxConfig("wx-open-launch-weapp");
      }
      setTitle(title);
      setQrcode(qrcode);
      setSlide(slide);
      setBanner(banner);
    })();
  }, [props]);

  return (
    <>
      {title && (
        <Brandinfo4Warp>
          <h2 className="brandinfo4-title">{title}</h2>
          <div className="template-bg">
            {banner && <Banner info={banner} />}
            <div className="brandinfo4-wrap">
              <div className="brandinfo4-wrap_slider-tag">
                {slide.items && <Slider list={slide.items} time={slide.time} />}
              </div>
              <div className="brandinfo4-wrap_long-tag mgtop30">
                {qrcode && <Qrcode info={qrcode} />}
              </div>
            </div>
          </div>
        </Brandinfo4Warp>
      )}
    </>
  );
};

export default Brandinfo4;
