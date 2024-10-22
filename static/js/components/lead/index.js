import { useEffect, useState } from "react";
import { LeadWarp } from "./style";
import { getJson } from "../../libs/HttpUtils";
import { parseUrl } from "../../libs/UrlUtils";

const Lead = (props) => {
  const [list, setList] = useState([]);
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");
  const [more, setMore] = useState("");
  const [active, setActive] = useState(0);
  useEffect(() => {
    (async () => {
      const {
        data: { tags, more },
      } = await getJson(parseUrl(props.json));
      setList(tags);
      setMore(more);
      setImg(tags[0]?.img);
      setUrl(tags[0]?.url);
    })();
  }, [props]);
  const titleClick = (item, idx) => {
    if (item.img) {
      setActive(idx);
      setImg(item.img);
      setUrl(item.url);
    }
  };
  return (
    <LeadWarp>
      <h2>领跑榜 {more && <a href={more ? more : "#!"}>更多 &gt;</a>}</h2>
      <div className="block">
        <ul className="nav">
          {list.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                titleClick(item, idx);
              }}
              className={active === idx ? "nav-item active" : "nav-item"}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className="cont">
          <a href={url ? url : "#!"}>
            <img alt="领跑者" src={img} />
          </a>
        </div>
      </div>
    </LeadWarp>
  );
};

export default Lead;
