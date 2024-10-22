import Slider from 'react-slick';
import {BrandinfoSliderWarp} from "./style";
import {log} from '../../../../logs/action/mi/Slider';
import {jump} from "../../../../libs/HttpUtils";

const BrandinfoSlider = (props) => {
    let list = props.list;
    let miData = props.data;

    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        list?.length && <BrandinfoSliderWarp>
            <div className='slider'>
                <Slider {...settings}>
                    {list.map((item, idx) => (
                        // 如果miData不为空，并且miData中的uid不等于item的uid，则展示；
                        // 如果miData为空，则展示；
                        ((miData) ? (miData.uid !== item.uid) : true)
                         && (
                            <div className="slideItem" key={item.title + idx}>
                                <a onClick={() => sliderClickTrigger(item)} className="slideCont">
                                    <img alt="banner" src={item.img}/>
                                </a>
                            </div>
                        )
                    ))}
                </Slider>
            </div>
        </BrandinfoSliderWarp>
    );
}

// 点击Slider图触发的事件
const sliderClickTrigger = (item) => {
    log(item.id);
    jump(item.link);
};

export default BrandinfoSlider;
