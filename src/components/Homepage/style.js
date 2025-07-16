import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .maincontainer {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  // align-items: center;  
  width: 70%;
  height: 100vh;
  color: white;
  margin: 0 auto;   
  // text-align: left;   
}

  .btn {
    height: 50px;
    width: 150px;
    font-size: 20px;
    border-radius: 20px;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    margin: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn:hover {
    background-color: rgb(243, 80, 129);
    cursor: pointer;
  }

  .arrow-icon {
    margin-left: 10px;
    transition: transform 0.3s ease;
  }

  .btn:hover .arrow-icon {
    transform: rotate(90deg);
  }

  h1 {
    font-size: 40px;
  }

  .name {
    font-size: 20px;
    color: rgb(243, 80, 129);
  }

  p {
    font-size: 16px;
    margin: 10px;
  }

  .animation {
    font-weight: 600;
    font-size: 24px;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 10px;
  }
`;

export default Wrapper;
