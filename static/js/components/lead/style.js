import styled from "styled-components";

export const LeadWarp = styled.section`
    margin-top: .42rem;
    h2{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .34rem;
        font-weight: 600;
        color: #434669;
        margin-bottom: .31rem;
        padding-right: .2rem;
        a{
            font-size: .22rem;
            font-weight: 400;
            color: rgba(12,16,57,0.50);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1.1rem;
            height: .52rem;
            border: 0.01rem solid rgba(93,96,125,0.30);
            border-radius: .27rem;
        }
    }
    .block{
        background: #ffffff;
        border-radius: .12rem;
        box-shadow: 0px 0px .2rem 0px rgba(0,36,96,0.04); 
        padding:.29rem;
        .nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .nav-item{
            font-size: .3rem;
            font-weight: 400;
            color: #434669;
            border-bottom:3px solid #fff;
            padding-bottom:.05rem;
        }
        .nav-item.active{
            color: #007aff;
            border-bottom:3px solid #007aff;;
        }
        .cont{
            margin-top: .24rem;
            img{
                width: 6.50rem;
                height: 2.72rem;
            }
        }
    }

`;
