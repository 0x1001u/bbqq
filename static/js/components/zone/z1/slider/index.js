import { useEffect, useState } from "react";
import Slider from 'react-slick';
import { BrandinfoSliderWarp } from "./style";
import {log} from "../../../../logs/action/t1/Slider";

const BrandinfoSlider = (props) => {
    const [ list, setList ] = useState([]);
    useEffect(()=>{
        (async ()=>{
            setList(props.list)
        })()
    },[props.list]);

    // 点击广告触发的事件
    const trigger = (ad) => {
        if(ad.link) {
            // 记录日志
            log(ad.id);
            // 执行页面跳转
            window.location.href = ad.link;
        }
    };

    let settings = {
        dots: true,
        infinite: true,
        speed: props.time * 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };
    return(
        list?.length&&<BrandinfoSliderWarp>
            <div className='slider'>
                <Slider {...settings}>
                    {list.map((item,idx)=>(
                        <div className="slideItem" key={item.name+idx}>
                            <a href="#" onClick={()=>trigger(item)} className="slideCont">
                                <img alt="banner" src={item.img} />
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </BrandinfoSliderWarp>
    )

}

export default BrandinfoSlider;
