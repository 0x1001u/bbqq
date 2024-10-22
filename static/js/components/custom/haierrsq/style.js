import styled from "styled-components";
import { isPro } from "../../../libs/EnvUtils";

export const HaierrsqWarp = styled.section`
     margin-top: .24rem;
    .template-bg{
        
    }
    .haierrsq-title{
        font-size: .32rem;
        color: #000000;
        letter-spacing: 0;
        font-weight: 600;
        margin-bottom: .25rem;
    }
    .haierrsq-img-wrap{
        width: 100%;
        height: 3.36rem;
        border-radius: .12rem;
        margin-top: .24rem;
        margin-bottom: .24rem;
    }
    .haierrsq-wrap{
        box-shadow: 0rem 0rem .2rem 0rem rgba(0,0,0,0.15); 
        background: rgba(255,255,255,0.90);
        border-radius: .12rem;
        margin-bottom: 1.5rem;
        padding: 0;
        &_tag{
            background: rgba(255,255,255,0.90);
            border: .01rem solid rgba(255,255,255,0.20);
            border-radius: .1rem;
            &_item-wrap{
                position: relative;
            }
            &_item{
                display:flex;
                justify-content: space-between;
                align-items: center;
                padding-right: .4rem;
                &_title{
                    display:flex;
                    justify-content: start;
                    align-items: center;
                    padding-left: .4rem;
                    &_img{
                        width: .48rem;
                        height: .48rem;
                        margin-right: .36rem;
                    }
                    &_name{
                        font-size: .32rem;
                        color: #000000;
                        letter-spacing: 0;
                        font-weight: 400;
                    }
                    &_iname{
                        font-size: .32rem;
                        color: #999999;
                        letter-spacing: 0;
                        font-weight: 400;
                    }
                    &_tag-wrap{
                        margin-top: .04rem;
                    }
                    &_tag{
                        font-size: .26rem;
                        color: #999999;
                        letter-spacing: 0;
                        font-weight: 400;
                        padding-right: .4rem;
                        position: relative;
                        float: left;
                    }
                    &_tag:last-child{
                        padding-right: 0
                    }
                }
                &_hr{
                    width: 93%;
                    border: none;
                    height: 1px;
                    background-color: #F3F3F3;
                }
                &_right{
                    width: .44rem;
                    height: .44rem;
                }
            }
            &_item-wrap:last-child{
                margin-bottom: .3rem;
            }
        }
        &_videoDiv {
            position: relative;  
            display: inline-block;
        }
        &_videoImg {
            width: 100%;
            margin-bottom: .25rem;
            border-radius: .12rem;
        }
        &_playImg {
            position: absolute;  
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 50%;
        }
    }
    .haierrsq-bottom {
        position: fixed;  
        bottom: 0;
        left: 0; 
        width: 100%; 
        height: auto; 
        z-index: 9; 
    }
    .haierrsq-bottom .block {
        background-color: #f6f6f6;
        padding-bottom: 0.4rem;
    }
    .haierrsq-bottom img {
        width: 100%; 
        height: auto; 
    }
`;
