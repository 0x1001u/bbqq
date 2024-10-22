import { useEffect, useState } from "react";
import { Brandinfo1Warp } from "./style";
import Slider from "./slider";
import TelTag from "./tag/Tel";
import MiniTag from "./tag/Mini";
import DefaultTag from "./tag/Default";
import { parseUrl } from "../../../libs/UrlUtils";
import { getJson } from "../../../libs/HttpUtils";
import { isWx } from "../../../libs/EnvUtils";
import { wxConfig } from "../../../libs/WeiXin";
import { log } from "../../../logs/action/t1/Qrcode";
import { TAG1, TAG2 } from "../../../logs/action/t1/Tag";

const Brandinfo1 = (props) => {
  const [title, setTitle] = useState("");
  const [frame, setInfo] = useState({});
  const [qrcode, setQrcode] = useState({});
  const [slide, setSlide] = useState({});
  const [tag1, setTag1] = useState([]);
  const [tag2, setTag2] = useState([]);
  let timeOutEvent = 0; //定时器
  useEffect(() => {
    (async () => {
      const {
        data: { title, frame, qrcode, tag1, tag2, slide },
      } = await getJson(parseUrl(props.json));
      let isLoadWx = false;
      tag1.forEach((element) => {
        if (element.miniapp) {
          isLoadWx = true;
        }
      });
      tag2.forEach((element) => {
        if (element.miniapp) {
          isLoadWx = true;
        }
      });
      if (isLoadWx) {
        await wxConfig("wx-open-launch-weapp");
      }
      setTitle(title);
      setInfo(frame);
      setQrcode(qrcode);
      setSlide(slide);
      setTag1(tag1);
      setTag2(tag2);
    })();
  }, [props]);

  // ---------------------------------------------------------- Long Press Listener ---
  // 定时结束标记
  let finishFlag = false;
  // 开始按
  const touchStart = () => {
    // 这里设置定时器，0.5秒后，将finishFlag设置为true，即按住0.5秒视为长按
    timeOutEvent = setTimeout(function () {
      finishFlag = true;
    }, 500);
    return false;
  };
  // 结束按
  const touchEnd = () => {
    //清除定时器
    clearTimeout(timeOutEvent);

    // 如果此时finishFlag为true，证明长按时间已经达到0.5秒，则记录日志
    if (finishFlag) {
      finishFlag = false;
      log();
    } else {
      // 如果此时finishFlag为false，证明长按时间未达到0.5秒
    }

    return false;
  };
  // ----------------------------------------------------------------------------------

  const renderTag = (item, tagType) => {
    if (item.phone && item.phone !== "") {
      //如果存在打电话，则添加a标签
      return <TelTag key={item.title} item={item} tagType={tagType} />;
    } else if (isWx() && item.miniapp && item.miniapp.id) {
      //如果是小程序，则添加小程序标签
      return <MiniTag key={item.title} item={item} tagType={tagType} />;
    } else {
      // 默认点击跳转链接
      return <DefaultTag key={item.title} item={item} tagType={tagType} />;
    }
  };
  return (
    title && (
      <Brandinfo1Warp>
        <h2 className="brandinfo1-title">{title}</h2>
        <div className="template-bg" style={{ background: frame.bgcolor }}>
          <div className="brandinfo1-wrap">
            <div className="brandinfo1-wrap_img-wrap">
              <img
                className="brandinfo1-wrap_img-wrap_img"
                src={frame.logo}
                alt="logo"
              />
            </div>

            {slide.items && <Slider list={slide.items} time={slide.time} />}
            <div className="brandinfo1-wrap_tag">
              {tag1.map((item) => {
                return renderTag(item, TAG1);
              })}
              {tag2.map((item) => {
                return renderTag(item, TAG2);
              })}
            </div>
          </div>
          <div
            className="brandinfo1-footer"
            style={{ backgroundImage: "url(" + frame.bgimg + ")" }}
            onTouchStart={() => touchStart()}
            onTouchEnd={() => touchEnd()}
          >
            <div className="brandinfo1-footer_qrcode">
              <img
                className="brandinfo1-footer_qrcode_img"
                src={qrcode.img}
                alt="qrcode"
              />
              <div className="brandinfo1-footer_qrcode_title">
                {qrcode.text}
              </div>
            </div>
          </div>
        </div>
      </Brandinfo1Warp>
    )
  );
};

export default Brandinfo1;
