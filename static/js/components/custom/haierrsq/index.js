import { useEffect, useState } from "react";
import { HaierrsqWarp } from "./style";
import HaierrsqTag from "./tag";
import { getJson, postJson, jump } from "../../../libs/HttpUtils";
import { random } from "../../../libs/util";
import Slider from "./slider";
import { IMG_BOTTOM, PLAY_BOTTOM } from "../../../libs/constant/Haierrsq";
import { parseUrl } from "../../../libs/UrlUtils";

const Haierrsq = (props) => {
  const [model, setModel] = useState("");
  const [title, setTItle] = useState("");
  const [videoImg, setVideoImg] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [qaJumpUrl, setQaJumpUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    (async () => {
      let url = parseUrl(props.json);
      let { data } = await getJson(url);
      setModel(data["model"]);
    })();
  }, [props]);

  useEffect(() => {
    model &&
      (async () => {
        // let {data} = await postJson("https://ssdp-test.haier.net/openServerInf/oneCode/mainPage?productName=" + model);
        let { data } = await postJson(
          "https://ssdp.haier.net/openServerInf/oneCode/mainPage?productName=" +
            model
        );
        let busData = data.data;
        setTags(busData["functionList"]);
        setSliders(Object.entries(busData["bannerImages"]));
        setTItle(busData.title);

        setVideoImg(busData["videoImage"]);
        setVideoUrl(busData["videoJumpUrl"]);
        setQaJumpUrl(busData["qaJumpUrl"]);
      })();
  }, [model]);

  return (
    <HaierrsqWarp>
      <div className="template-bg">
        <div className="haierrsq-title">{title}</div>
        <div className="haierrsq-wrap" key={random(10)}>
          {videoImg && (
            <a
              onClick={() => clickTrigger(videoUrl)}
              className="haierrsq-wrap_videoDiv"
            >
              <img
                className="haierrsq-wrap_videoImg"
                src={videoImg}
                alt="bottom"
              />
              <img
                className="haierrsq-wrap_playImg"
                src={PLAY_BOTTOM}
                alt="play"
              />
            </a>
          )}
          {sliders && 0 < sliders.length && <Slider list={sliders} />}
          {tags && <HaierrsqTag tags={tags} />}
        </div>
        {qaJumpUrl && (
          <div className="haierrsq-bottom">
            <a onClick={() => clickTrigger(qaJumpUrl)}>
              <img src={IMG_BOTTOM} alt="bottom" />
            </a>
            <div className="block" />
          </div>
        )}
      </div>
    </HaierrsqWarp>
  );
};

// 点击Slider图触发的事件
const clickTrigger = (url) => {
  jump(url);
};

export default Haierrsq;
