import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Brandinfo3SliderWarp } from "./style";
import { log } from "../../../../logs/action/t4/Slider";

const BrandinfoSlider = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      setList(props.list);
    })();
  }, [props]);

  // 记录日志
  const addLog = (id) => {
    log(id);
  };

  // 点击广告触发的事件
  const trigger = (item) => {
    if (item.link) {
      // 记录日志
      addLog(item.id);
      // 执行页面跳转
      window.location.href = item.link;
    }
  };
  const imghtml1 = (item, idx) => {
    if (item.miniapp && item.miniapp.id) {
      //如果是小程序，则添加小程序标签
      return (
        <div className="position-relative" onClick={() => addLog(item.id)}>
          <div className="slideItem" key={item.name + idx}>
            <a href="#" className="slideCont">
              <img alt="banner" src={item.img} />
            </a>
          </div>
          <wx-open-launch-weapp
            username={item.miniapp.id}
            path={item.miniapp.path}
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
        <div className="slideItem" key={item.name + idx}>
          <a href="#" onClick={() => trigger(item)} className="slideCont">
            <img alt="banner" src={item.img} />
          </a>
        </div>
      );
    }
  };
  let settings = {
    dots: true,
    infinite: true,
    speed: props.time * 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    list?.length && (
      <Brandinfo3SliderWarp>
        <div className="slider">
          <Slider {...settings}>
            {list.map((item, idx) => {
              return imghtml1(item, idx);
            })}
          </Slider>
        </div>
      </Brandinfo3SliderWarp>
    )
  );
};

export default BrandinfoSlider;
