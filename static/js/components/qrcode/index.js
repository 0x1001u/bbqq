import {QrcodeStyle} from "./style";
import {log} from "../../logs/action/default/Qrcode";

const Index = ({data}) => {
    // ---------------------------------------------------------- Long Press Listener ---
    //定时器
    let timeOutEvent = 0;
    // 定时结束标记
    let finishFlag = false;
    // 开始按
    const touchStart = () => {
        // 这里设置定时器，0.5秒后，将finishFlag设置为true，即按住0.5秒视为长按
        timeOutEvent = setTimeout(function () {
            finishFlag = true;
        }, 500);
        return false;
    }
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
    }
    // ----------------------------------------------------------------------------------

    return (
        <>
            <QrcodeStyle
                onTouchStart={() => touchStart()}
                onTouchEnd={() => touchEnd()}
            >
                <img src={data.img} alt="qrcode"/>
            </QrcodeStyle>
        </>
    );
};

export default Index;
