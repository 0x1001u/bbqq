import styled from 'styled-components'

export const BrandinfoSliderWarp = styled.section`
margin-top: .24rem;
.slider {
    width: 100%;
    background: transparent;
    border-radius: .32rem;
    box-shadow: 0px 0px 20px 0px rgba(0,36,96,0.04);
    margin: 0 auto;
    height: 2.4rem;
    margin-top: 0.16rem;
    padding-top: 0;
    
}

.slider .slideCont {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

.slider .slideCont img {
    width: 100%;
    height: 2.4rem;
    border-radius: .32rem;
}
.slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

.slick-list {
    position: relative;
    display: block;
    border-radius: .32rem;
    overflow: hidden;
    z-index: 100;
    margin: 0;
    padding: 0;
    transform: rotate(0deg);
    -webkit-transform:rotate(0deg);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
}

.slick-list:focus {
    outline: none;
}

.slick-list.dragging {
    cursor: pointer;
    cursor: hand;
}



.slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
}

.slick-track:before,
.slick-track:after {
    display: table;

    content: '';
}

.slick-track:after {
    clear: both;
}

.slick-loading .slick-track {
    visibility: hidden;
}

.slick-slide {
    display: none;
    float: left;

    height: 2.4rem;
    min-height: 1px;
}

[dir='rtl'] .slick-slide {
    float: right;
}

.slick-slide img {
    display: block;
}

.slick-slide.slick-loading img {
    display: none;
}

.slick-slide.dragging img {
    pointer-events: none;
}

.slick-initialized .slick-slide {
    display: block;
}

.slick-loading .slick-slide {
    visibility: hidden;
}

.slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
}

.slick-arrow.slick-hidden {
    display: none;
}

/* Slider */


/* Arrows */
.slick-prev,
.slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: none !important;

    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
}

.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
}

.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before {
    opacity: 1;
}

.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
    opacity: .25;
}

.slick-prev:before,
.slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;

    opacity: .75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.slick-prev {
    left: -25px;
}

[dir='rtl'] .slick-prev {
    right: -25px;
    left: auto;
}

.slick-prev:before {
    content: '←';
}

[dir='rtl'] .slick-prev:before {
    content: '→';
}

.slick-next {
    right: -25px;
}

[dir='rtl'] .slick-next {
    right: auto;
    left: -25px;
}

.slick-next:before {
    content: '→';
}

[dir='rtl'] .slick-next:before {
    content: '←';
}

/* Dots */
.slick-dotted.slick-slider {
    margin-bottom: 30px;
}

.slick-dots {
    position: absolute;
    bottom: .22rem;
    right: .3rem;
    display: block;

    padding: 0;
    margin: 0;

    list-style: none;


}

.slick-dots li {
    position: relative;

    display: inline-block;

    width: .1rem;
    height: .1rem;
    margin: 0 .06rem;
    padding: 0;

    cursor: pointer;
}

.slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: .1rem;
    height: .1rem;
    

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
}

.slick-dots li button:hover,
.slick-dots li button:focus {
    outline: none;
}

.slick-dots li button:hover:before,
.slick-dots li button:focus:before {
    opacity: 1;
}

.slick-dots li button:before {
    font-family: 'slick';
    font-size: .3rem;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: .1rem;
    height: .1rem;
    z-index: 100;

    content: '•';
    text-align: center;

    opacity: 0.2;
    color: #ffffff;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.slick-dots li.slick-active button:before {
    opacity: 1;
    color: #ffffff;
}
`;
