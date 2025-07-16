import styled from "styled-components";

const Wrapper = styled.section`
display: flex;
justify-content: center;
color: white;
.heading{
color: white;
display: flex;
justify-content: center;
}
.content1{
color: white;
font-weight: bold;
font-size: 25px;
margin-bottom: 10px;
display: inline-block;
justify-content: center;
border-bottom: 5px solid rgb(243, 80, 129);
}
 .content2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;                            
    }

    img{
    height: 70px;
    width: 90px;
    align-self: center;
    margin: 10px;
    }
    
    .images{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 140px;
    width: 140px;
    margin: 10px;
    background-color: rgba(18, 18, 18, 0.4);
    }
    p{
    text-align: center;
    }

@media screen and (min-width: 768px){

.content2{
 display: gird;
 grid-template-columns: repeat(4, 1fr);
gap: 30px;
}

}
`

export default Wrapper