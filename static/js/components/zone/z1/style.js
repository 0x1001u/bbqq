import styled from "styled-components";

export const Brandinfo1Warp = styled.section`
    margin-top: .42rem;
    .template-bg{
        border-radius: .2rem;
        border-radius: .2rem;
        background-color: #0060c9;
        box-shadow: 0rem 0rem .2rem 0rem rgba(0,0,0,0.15); 
    }
    .brandinfo1-title{
        font-size: .34rem;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: left;
        color: #434669;
        margin-bottom: .3rem;
    }
    .brandinfo1-wrap{
        padding: .36rem .4rem .78rem .4rem;
        &_img-wrap{
            text-align: center;
            &_img{
                width: 5.68rem;
                height: .66rem;
                margin: 0 auto;
            }
        }
        &_tag{
            background: rgba(255,255,255,0.11);
            border: .01rem solid rgba(255,255,255,0.20);
            border-radius: .1rem;
            &_item-wrap{
                position: relative;
                border-bottom: 1px solid rgba(255,255,255,0.20);
            }
            &_item{
                display:flex;
                justify-content: space-between;
                align-items: center;
                margin: 0 .25rem;
                padding: .26rem 0;
                &_title{
                    display:flex;
                    justify-content: start;
                    align-items: center;
                    &_img{
                        width: .48rem;
                        height: .48rem;
                        margin-right: .19rem;
                    }
                    &_name{
                        font-size: .32rem;
                        font-family: PingFangSC, PingFangSC-Medium;
                        font-weight: 500;
                        text-align: left;
                        color: #ffffff;
                    }
                }
                &_right{
                    width: .13rem;
                    height: .23rem;
                }
            }
            &_item-wrap:last-child{
                border-bottom: none;
            }
        }
        
    }
    .brandinfo1-footer{
        text-align: center;
        margin-bottom: .16rem;
        height: 3.4rem;
        background-size: cover;
        &_qrcode{
            width: 2.3rem;
            height: 2.6rem;
            background: #ffffff;
            border-radius: .2rem;
            margin: 0 auto;
            padding: .2rem .1rem 0;
            &_img{
                width: 1.81rem;
                height: 1.81rem;
            }
            &_title{
                font-size: .24rem;
                padding-top: .1rem;
            }
        }
    }
`;
