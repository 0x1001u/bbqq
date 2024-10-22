import styled from "styled-components";

export const NavWrap = styled.nav`
    height: .96rem;
    background: #fff;
    display: flex;
    align-items: center;
    box-sizing: content-box;
    padding:0 .3rem;
    a{
        font-size: .3rem;
        font-weight: 400;
        text-align: center;
        color: #434669;
        margin-right: .33rem;
        display: flex;
        height: 100%;
        align-items: center;
        border-bottom: .07rem solid #fff;
        img{
            width: 1.3rem;
            height: .37rem;
        }
    }
    a.active{
        border-bottom:.07rem solid #434669 ;
    }
`;
