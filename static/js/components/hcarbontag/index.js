import { useEffect, useState } from "react";
import { CarbonWarp } from "./style";
import { getJson } from "../../libs/HttpUtils";
import { parseUrl } from "../../libs/UrlUtils";

const Hcarbontag = (props) => {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      const {
        data: { name, tags },
      } = await getJson(parseUrl(props.json));
      setTitle(name);
      setList(tags);
    })();
  }, [props]);

  return (
    list.length > 0 && (
      <CarbonWarp>
        <div className="carbonBlock">
          <em>{title}</em>
          {list.length > 0 &&
            list.map((item) => (
              <a href={item.url} className="carbonItem" key={item.name}>
                <div className="left">
                  <h3>{item.name}</h3>
                  <i>
                    <img src={item.img} alt="img1" />
                  </i>
                </div>
              </a>
            ))}
        </div>
        <div className="carbonFoot">
          <hr size="1" color="#b2b4c2" />
          <p>碳信息源于企业自我声明</p>
          <hr size="1" color="#b2b4c2" />
        </div>
      </CarbonWarp>
    )
  );
};

export default Hcarbontag;
