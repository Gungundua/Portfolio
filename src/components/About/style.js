import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
  width: 100%;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 1200px;
    gap: 50px;
  }

  .left {
    flex: 1;
    color: white;
    font-size: 28px;
    font-weight: bold;
    text-align: right;
    margin-top: 55px;
  }

  .right {
    flex: 2;
    color: white;
    text-align: left;
    width: 70%
  }

  .heading {
    margin-bottom: 10px;
  }

  .content1 {
    font-size: 35px;
    border-bottom: 5px solid rgb(243, 80, 129);
    display: inline-block;
    margin-bottom: 15px;
  }

  .content2 {
    font-size: 15px;
    line-height: 1.6;
  }

  h2, p {
    margin: 8px 0;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .left, .right {
      text-align: center;
    }

    .left h2 {
      font-size: 24px;
    }

    .content1 {
      font-size: 28px;
    }

    .content2 {
      font-size: 14px;
    }
  }
`;

export default Wrapper;
