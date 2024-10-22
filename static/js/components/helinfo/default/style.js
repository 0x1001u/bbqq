import styled from "styled-components";

export const RecordWarp = styled.section`
    background: #1f62ff;
    border-radius: .12rem;
	box-shadow: 0px .04rem .16rem 0px rgba(0,36,96,0.16); 
    display: flex;
    justify-content: space-between;
    padding: .3rem;;
    .left{
        display: flex;
        flex-direction: column;
        h1{
            font-size: .3rem;
            font-weight: 500;
            color: #fff;
            margin-bottom: .15rem;
        }
        p{
            font-size: .22rem;
            font-weight: 400;
            color: rgba(255,255,255,0.70);
            margin-bottom: .1rem;
        }
    }
    .right{
        display: flex;
        flex-direction: column;
        img{
            width: 1.23rem;
            height: 1.23rem;
            margin-top: .08rem;
        }
        div{
            font-size: .22rem;
            font-weight: 400;
            color: rgba(255,255,255,0.70);
            margin-top: .45rem;
        }
    }
    .extendBlock{
        padding:0 .4rem;
    }
	.extendBlock h2{
		height:.48rem;
		font-size:.34rem;
		font-weight:500;
		color:rgba(67,70,105,1);
		line-height:.48rem;
		margin:.4rem 0;
	}	
	.extendBlock .listItem{
		display:flex;
		justify-content:space-between;
		margin-bottom:.2rem;
	}
	.extendBlock .listItem .itemKey{
		font-size:.32rem;
		font-weight:400;
		color:rgba(12,16,57,0.5);
	}
	.extendBlock .listItem .itemVal{
		font-size:.32rem;
		font-weight:500;
		color:rgba(12,16,57,0.5);
	}
	.statement{
		height:.5rem;
		font-size:.26rem;
		font-weight:400;
		color:rgba(0,152,255,1);
		line-height:.5rem;
		display:flex;
		justify-content:flex-start;
		align-items:center;
		margin:.73rem 0 .39rem 0; 
	}
	.statement img{
		width:.38rem;
		height:.38rem;
		margin-right:.13rem;
	}
	.extendList{
		height:4.5rem;
		overflow-y: scroll;
	}
	.extendList li{
		font-size:.32rem;
		font-weight:400;
		color:rgba(12,16,57,0.5);
		margin-bottom:.2rem;
	}
	.extendBlock table{
        width: 100%;
        height: 4.8rem;
        overflow-y: scroll;
        display: block;
        th, td{
            font-size:0.32rem;
            font-weight:normal;
            text-align:center;
            border: 1px solid #ccc;
            padding: .1rem;
	    }
    }
    .hidden {
        display: none
    }
    .recodeParamWrap{
        height: 7rem;
        overflow-y: auto;
    }
`;
