/*
 * @Descripttion: 进项税
 * @Author: yuxiaosong
 * @Date: 2022-02-16 12:55:03
 * @LastEditors: yuxiaosong
 * @LastEditTime: 2022-02-16 13:27:54
 */
import styled from "styled-components";

export const Brandinfo4Warp = styled.section`
    margin-top: .42rem;
    
    .brandinfo4-title{
        font-size: .34rem;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: left;
        color: #434669;
        margin-bottom: .3rem;
    }
    .brandinfo4-img-wrap{
        &_img1{
            height: 8.44rem;
            width: 100%;
            margin-bottom: .3rem;
            border-radius: .2rem;
            box-shadow: 0rem 0rem .2rem 0rem rgba(0,0,0,0.15);
        }
    }
    .brandinfo4-wrap{
        &_slider-tag{
            display: flex;
            justify-content: space-between;
            align-items: center;
            &_tag-wrap{
                margin-left: .2rem;
            }
            &_tag{
                background: #ffffff;
                border-radius: .12rem;
                box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05); 
                padding: .3rem .26rem;
                margin-bottom: .2rem;
                &_img{
                    width: .6rem;
                    height: .6rem;
                }
                &_name{
                    font-size: .34rem;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    color: #434669;
                    margin-left: .08rem;
                }
            }
        }
        &_long-tag{
            position: relative;
            border-radius: .2rem;
            &_img-bg{
                width: 7.1rem;
                height: 3.46rem;
                border-radius: .2rem;
                box-shadow: 0rem 0rem .2rem 0rem rgba(0,0,0,0.15);
            }
            &_img-code-wrap{
                position: absolute;
                top: .28rem;
                right: .28rem;
                background: #ffffff;
                padding: .1rem;
                border-radius: 5px;
                &_img{
                    width: 1.8rem;
                     height: 1.8rem; 
                }
                &_txt{
                    font-size: .28rem;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    text-align: left;
                    color: rgba(67,70,105,0.50);
                    padding-top: .1rem;
                }
            }
        }
        
    }
    .mgtop30{
        margin-top: .3rem;
    }
    .position-relative{
        position: relative;
    }
`;
