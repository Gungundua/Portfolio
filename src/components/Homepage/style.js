import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;             
  justify-content: center;   
  align-items: center;       /* Vertically center */
  height: 100vh;              /* Full viewport height */

  .maincontainer {
    display: flex;
    flex-direction: row;
    justify-content: center;  /* Center horizontally */
    align-items: center;      /* Center vertically */
    width: 80%;               /* Set a width */
    height: 300px;            /* Set a height */
  }

  .container {
    display: flex;
    flex-direction: column;
    // background-color: rgba(253, 253, 253, 0.2);
    color: white;
    width: 100%;              
    height: 150px;            
    justify-content: center;
    align-items: flex-start;
    // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
    color: rgb(243, 80, 129);
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
