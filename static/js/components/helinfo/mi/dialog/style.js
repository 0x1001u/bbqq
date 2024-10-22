import styled from "styled-components";
import imgPublicPath from '@/libs/util'
export const DialogWarp = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.3);
    z-index: 1000;
`;

export const DialogCont = styled.div`
    width: 100%;
    height: 10rem;
    background: #ffffff;
    border-radius: .32rem .32rem 0px 0px;
    box-shadow: 0px .04rem .16rem 0px rgba(0,36,96,0.16); 
    position: absolute;
    bottom: 0;
    left: 0;
    .close{
        background: url(${imgPublicPath}/close.png);
        width: .35rem;
        height: .35rem;
        background-size:cover;
        position: absolute;
        top: 0.3rem;
        right:0.4rem;
    }
`;
