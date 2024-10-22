/**
 * 所属组件：标签组件
 * 块信息：一组标签
 * 定制：说明书链接为海尔提供的，存在Token机制的，特殊业务定制
 */
import { useEffect, useState } from "react";
import { BlockStyle } from "./style";
import DefTag from "./def";
import { getManualJson } from "./request";
import { getCookie } from "../../../libs/tools";
import { getJsonData } from "../../../api";
import { GetQueryString } from "../../../libs/tools";

const Index = (props) => {
  // {"name":xxx, "tags":[xxx]}
  const [block, setBlock] = useState({});
  const [manualUrl, setManualUrl] = useState("");
  const token = GetQueryString("code");
  const model = getCookie("model");
  useEffect(() => {
    (async () => {
      let manualTag;
      if (token) {
        // .................................... 获取说明书跳转的链接地址 ...
        const { data: manualInfo } = await getManualJson(model, token);
        // console.log(JSON.stringify(manualInfo));
        if (!manualInfo.success) {
          setManualUrl(undefined);
        } else {
          let result = manualInfo.result;
          let pdfUrls = result.pdfUrls;
          let manualUrls = result.manualUrls;
          if (
            manualUrls &&
            manualUrls.constructor === Array &&
            0 < manualUrls.length &&
            manualUrls[0]
          ) {
            setManualUrl(manualUrls[0]);
          }
          if (
            !manualUrls[0] &&
            pdfUrls &&
            pdfUrls.constructor === Array &&
            0 < pdfUrls.length &&
            pdfUrls[0]
          ) {
            setManualUrl(pdfUrls[0]);
          }
        }
        // .............................................................

        // .................................. 将说明书地址整合到Block中 ...
        manualTag = {
          id: "manual",
          name: "产品说明书",
          img: "https://bbqk.pzjdimg.com/manual/imgs/logo/1.png",
          url: manualUrl,
        };
        // .............................................................
      }
      if (props.data) {
        setBlock(props.data);
      } else {
        const { data } = await getJsonData(props.json);
        if (token && manualUrl) {
          // 删除json中的说明书tag，新增自定说明书tag
          data.tags = data.tags.filter((item) => item.id !== "manual");
          data.tags = [manualTag, ...data.tags];
          // console.log("data:", data);
        }
        setBlock(data);
      }
    })();
  }, [manualUrl, model, props, token]);
  // console.log("manualUrl:", manualUrl);
  return block && block.tags && block.tags.length > 0 ? (
    <BlockStyle>
      <h2>{block.name} </h2>
      {block.tags.map((item, index) => {
        const { id, name, url, img } = item;
        return <DefTag key={index} id={id} url={url} title={name} logo={img} />;
      })}
    </BlockStyle>
  ) : (
    <></>
  );
};

export default Index;
