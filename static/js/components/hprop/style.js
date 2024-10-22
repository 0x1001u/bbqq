import styled from "styled-components";
export const RadarWarp = styled.section`
    margin-top: .42rem;
    .radarColmn{
        
        h2.title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: .34rem;
            font-weight: 600;
            color: #434669;
            margin-bottom: .31rem;
            padding-right: .2rem;
            i{
                font-size: .3rem;
                color: rgba(31,98,255,1);
            }
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
        .radarUnitWarp{
            display: flex;
            justify-content: space-around;
            margin-top:.26rem;
            background: #ffffff;
            border-radius: .12rem;
            box-shadow: 0px 0.04rem .16rem 0px rgba(0,36,96,0.06); 
            padding: .34rem .4rem;
        }
        .radarUnit{
            dt,dt img{
                width: .76rem;
                height: .76rem;
            }
            dd:nth-of-type(1){
                font-size: .26rem;
                font-weight: 400;
                text-align: center;
                color: #0c1039;
                margin:.05rem 0;
            }
            dd:nth-of-type(2){
                font-size: .18rem;
                font-weight: 400;
                color: #b6b7c3;
                text-align: center;
                i{
                    color: rgba(31,98,255,1);
                }
            }
        }
    }   
`;
