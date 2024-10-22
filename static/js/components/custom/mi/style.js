import styled from "styled-components";
import { isPro } from "../../../libs/EnvUtils";

export const MiWarp = isPro()
  ? styled.section`
     margin-top: .24rem;
    .template-bg{
        
    }
    .xiaomi-title{
        font-size: .24rem;
        color: #666666;
        font-weight: 500;
        margin-bottom: .8rem;
    }
    .xiaomi-img-wrap{
        width: 100%;
        height: 3.36rem;
        border-radius: .32rem;
        margin-top: .24rem;
        margin-bottom: .24rem;
    }
    .xiaomi-wrap{
        box-shadow: 0rem 0rem .2rem 0rem rgba(0,0,0,0.15); 
        background: rgba(255,255,255,0.90);
        border-radius: .32rem;
        padding: .38rem .4rem 0 .44rem;
        &_tag{
            background: rgba(255,255,255,0.11);
            border: .01rem solid rgba(255,255,255,0.20);
            border-radius: .1rem;
            &_item-wrap{
                position: relative;
            }
            &_item{
                display:flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.04rem;
                &_title{
                    display:flex;
                    justify-content: start;
                    align-items: center;
                    &_img{
                        width: .48rem;
                        height: .48rem;
                        margin-right: .36rem;
                    }
                    &_name{
                        font-size: .32rem;
                        color: #000000;
                        letter-spacing: 0;
                        font-weight: 500;
                    }
                    &_iname{
                        font-size: .32rem;
                        color: #999999;
                        letter-spacing: 0;
                        font-weight: 500;
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
                &_right{
                    width: .44rem;
                    height: .44rem;
                }
            }
            &_item-wrap:last-child{
                margin-top: -.18rem;
                margin-bottom: 1rem;
            }
        }
        
    }
`
  : styled.section`
     margin-top: .24rem;
    .template-bg{
        
    }
    .xiaomi-title{
        font-size: .24rem;
        color: #666666;
        font-weight: 500;
        margin-bottom: .8rem;
    }
    .xiaomi-img-wrap{
        width: 100%;
        height: 3.36rem;
        border-radius: .32rem;
        margin-top: .24rem;
        margin-bottom: .24rem;
    }
    .xiaomi-wrap{
        box-shadow: 0rem 0rem .2rem 0rem rgba(0,0,0,0.15); 
        background: rgba(255,255,255,0.90);
        border-radius: .32rem;
        padding: .38rem .4rem 0 .44rem;
        &_tag{
            background: rgba(255,255,255,0.11);
            border: .01rem solid rgba(255,255,255,0.20);
            border-radius: .1rem;
            &_item-wrap{
                position: relative;
            }
            &_item{
                display:flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.04rem;
                &_title{
                    display:flex;
                    justify-content: start;
                    align-items: center;
                    &_img{
                        width: .48rem;
                        height: .48rem;
                        margin-right: .36rem;
                    }
                    &_name{
                        font-size: .32rem;
                        color: #000000;
                        letter-spacing: 0;
                        font-weight: 500;
                    }
                    &_iname{
                        font-size: .32rem;
                        color: #999999;
                        letter-spacing: 0;
                        font-weight: 500;
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
                &_right{
                    width: .44rem;
                    height: .44rem;
                }
            }
            &_item-wrap:last-child{
                margin-top: -.18rem;
                margin-bottom: 1rem;
            }
        }
        
    }
`;
