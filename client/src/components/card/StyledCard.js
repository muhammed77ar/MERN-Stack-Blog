import styled from "styled-components";

const mobileBreakPoint = "790px"

export const CardStyle = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 20px 0;
cursor: pointer;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border-radius: 10px;
transition: all 0.4s ease;
@media screen and (max-width: ${mobileBreakPoint}){
margin: 30px 0;
}
&:hover{
    transform: scale(1.03);
}
.top{
    display: flex;
    flex-direction: column;
    width: 380px;
    height: 480px;
    @media screen and (max-width: ${mobileBreakPoint}){
        width: 300px;
        height: 570px;
    }
    img{
        height: 200px;
        object-fit: fill;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .content{
        margin:0 20px;
        p{
            text-align: start;
            margin-bottom: 0;
            padding-bottom: 0;
        }
    }
}
.bottom{
    display: flex;
    margin-bottom: 20px;
    margin-left: 20px;
    .profile{
        background-color: #0077ff;
        padding: 10px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: 500;
        color: white    ;
        border-radius: 100%;
        text-transform: capitalize;
    }
    .author{
        margin: 0;
        padding: 0;
        .name{
            margin: 0;
            font-size: 20px;
            font-weight: 500;
            text-transform: capitalize;
        }
        .date{
            margin: 0;
            color: gray;
            font-size: 15px;
        }
    }
}
`
