import styled from "styled-components";

export const ATagStyle = styled.a`
    background: #fff;
    border-radius: .12rem;
    box-shadow: 0px 0px .2rem 0px rgba(0,36,96,0.04); 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:.34rem .3rem;
    margin-bottom: .3rem;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .34rem;
        font-weight: 600;
        color: #434669;
        img{
            height:.9rem;
            margin-right: .26rem;
        }
    }
    img.right{
        width: .15rem;
        height: .25rem;   
    }
`;
