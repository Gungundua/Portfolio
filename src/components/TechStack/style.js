import styled from "styled-components";

const Wrapper = styled.section`
display: flex;
justify-content: center;

.container{
color: white;
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
    background-color: rgba(73, 69, 69, 0.3);
    }
    p{
    text-align: center;
    }
`

export default Wrapper