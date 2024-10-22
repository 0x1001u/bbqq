import styled from 'styled-components'
import imgPublicPath from '@/libs/util'
const tipIcon =`${imgPublicPath}/carbon-icon.png`
const co2= `${imgPublicPath}/co2img.png`;
const chct=`${imgPublicPath}/chct.png`;
export const CarbonWarp = styled.section`
    background: #fff;
    border-radius: .12rem;
    box-shadow: 0px .04rem .16rem 0px rgba(0,36,96,0.06); 
    padding: .2rem;
    padding-top:.63rem;
    margin-top: .2rem;
    .carbonBlock{
        background: #fff;
        border: .01rem solid rgba(47,193,76,0.30);
        border-radius: .11rem;
        position: relative;
        .carbonItem{
            padding:.5rem .34rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            .left{
                h3{
                    font-size: .3rem;
                    font-weight: 600;
                    color: #434669;
                    margin-bottom: .25rem;
                }
                i{
                    /* font-size: .28rem;
                    font-weight: 600;
                    color: #2fc14c;
                    border: .01rem solid #2fc14c;
                    border-radius: 1rem;
                    padding:.05rem .2rem; */
                    img{
                        width: 1.61rem;
                    }
                }
                
            }
            span{
                width: 1.16rem;
                height: 1.16rem;
                background: url(${chct});
                background-size: contain;
            }
        }
        .carbonItem:nth-of-type(2){
            border-top: .01rem solid rgba(47,193,76,0.30);
            .left{
                i{
                    img{
                        width: 2.1rem;
                    }
                }
            }
            span{
                width: 2.86rem;
                height: 2.03rem;
                position: absolute;
                bottom: 0;
                right: 0;
                background: url(${co2});
                background-size: contain;
            }
        }
        em{
            width: 1.92rem;
            height: .74rem;
            background-image: url(${tipIcon});
            background-size: cover;
            position: absolute;
            top:-.4rem;
            left: 0;
            font-size: .3rem;
            font-weight: 600;
            color: #fff;
            text-align: center;
            line-height: .72rem;
            font-style: normal;
        }
    }
    
    .carbonFoot{
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: .3;
        margin-top: 0.21rem;
        hr{
            width: 1.8rem;
            color: #b2b4c2;
            height: .01rem;
        }
        p{
            font-size: .22rem;
            color: #434669;
            margin:0 .1rem;
        }
    }
`;
