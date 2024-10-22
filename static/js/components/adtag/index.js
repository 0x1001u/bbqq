// 页面：扫码首页
// 模块：滚动广告栏
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { SliderWarp } from "./style";
import { log } from "../../logs/action/default/AdTag";
import { getJson } from "../../libs/HttpUtils";
import { parseUrl } from "../../libs/UrlUtils";
import { getCookie } from "../../libs/Cookie";

const Adtag = (props) => {
  const [list, setList] = useState([]);
  const currCid = getCookie("cid");

  useEffect(() => {
    (async () => {
      const { data } = await getJson(parseUrl(props.json));
      setList(data);
    })();
  }, [props]);

  // 点击广告触发的事件
  const trigger = (ad) => {
    // 记录日志
    log(ad.id);
    // 执行页面跳转
    window.location.href = ad.url;
  };

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return list?.length ? (
    <SliderWarp>
      <div
        className={
          props.styleName === "brandinfo1" ? "slider brandinfo1" : "slider"
        }
      >
        <Slider {...settings}>
          {
            // eslint-disable-next-line array-callback-return
            list.map((item, idx) => {
              let { cids } = item;
              // 如果cids不存在，或者当前扫码cid 存在于 cids中
              if (!cids || cids.includes(currCid * 1)) {
                return (
                  <div className="slideItem" key={item.name + idx}>
                    <a
                      href="#"
                      onClick={() => trigger(item)}
                      className="slideCont"
                    >
                      <img alt="banner" src={item.img} />
                    </a>
                  </div>
                );
              }
            })
          }
        </Slider>
      </div>
    </SliderWarp>
  ) : (
    <></>
  );
};

export default Adtag;
