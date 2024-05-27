import styled from "styled-components";

export const StyleArticles = styled.div`
display: flex;
flex-direction: column;
width: 100%;
color: black;
margin-top: 30px;

.top{
    h2{
        font-size: 30px;
        text-align: center;
    }
    p{
        text-align: center;
        color: gray;
    }
}
.bottom{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}
`