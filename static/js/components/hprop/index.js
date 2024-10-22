import { useEffect, useState } from "react";
import { RadarWarp } from "./style";
import { getJson } from "../../libs/HttpUtils";
import { parseUrl } from "../../libs/UrlUtils";

const Hprop = (props) => {
  const [title, setTitle] = useState("");
  const [pcats, setPcats] = useState([]);
  const [more, setMore] = useState("");
  useEffect(() => {
    (async () => {
      const {
        data: { pcats, name, url },
      } = await getJson(parseUrl(props.json));
      setTitle(name);
      setPcats(pcats);
      setMore(url);
    })();
  }, [props]);

  const trigger = () => {
    if (more) {
      window.location.href = more;
    }
  };

  return (
    <RadarWarp>
      <div className="radarColmn">
        <h2 className="title">
          <p>{title} </p> {more && <a onClick={() => trigger()}>更多 &gt;</a>}
        </h2>
        <div onClick={() => trigger()} className="radarUnitWarp">
          {pcats.length > 0 &&
            pcats.map((item) => (
              <dl className="radarUnit" key={item.name}>
                <dt>
                  <img alt={item.name} src={item.img} />
                </dt>
                <dd>{item.name}</dd>
                {/* <dd>获得<i>{item.cnum}</i>/{item.ctotal}</dd> */}
              </dl>
            ))}
        </div>
      </div>
    </RadarWarp>
  );
};

export default Hprop;
