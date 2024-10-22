import { XydcjStyle } from "./style";
import { log } from "../../../logs/action/default/Xydcj";

/**
 * 幸运大抽奖悬浮按钮
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
const Xydcj = ({ data }) => {
  const trigger = () => {
    log();
    window.location.href = data.link;
  };
  return (
    <>
      <XydcjStyle onClick={() => trigger()}>
        <img src={data.img} alt="actBtn" />
      </XydcjStyle>
    </>
  );
};

export default Xydcj;
