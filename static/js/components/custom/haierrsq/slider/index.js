import Slider from 'react-slick';
import {BrandinfoSliderWarp} from "./style";
import {jump} from "../../../../libs/HttpUtils";

const BrandinfoSlider = (props) => {
    let list = props.list;
console.log(list);
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
                    {/*{list.map((item, idx) => (*/}
                    {/*    (*/}
                    {/*        <div className="slideItem" key={'slider' + idx}>*/}
                    {/*            <a onClick={() => sliderClickTrigger(item)} className="slideCont">*/}
                    {/*                <img alt="banner" src={item.img}/>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*))} */}
                    {list.map(([key, value], idx) => (
                        (
                            <div className="slideItem" key={'slider' + idx}>
                                <a onClick={() => sliderClickTrigger(value)} className="slideCont">
                                    <img alt="banner" src={key}/>
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
const sliderClickTrigger = (jumpUrl) => {
    if(jumpUrl) {
        jump(jumpUrl);
    }
};

export default BrandinfoSlider;
