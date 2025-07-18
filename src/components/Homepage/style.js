import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .section {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .maincontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    color: white;
    padding: 40px;
    text-align: left;
    // margin-left: px;
    margin-top: -50px;
    max-width: 600px; /* Keeps content readable on larger screens */
  }

  .btn {
    height: 50px;
    width: 150px;
    font-size: 15px;
    border-radius: 20px;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    margin: 10px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn:hover {
    background-color: rgb(243, 80, 129);
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
    margin: 10px 0;
  }

  .name {
    font-size: 20px;
    color: rgb(243, 80, 129);
  }

  p {
    font-size: 16px;
    margin: 10px 0;
  }

  .animation {
    font-weight: 600;
    font-size: 24px;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 10px;
    text-align: center;
  }

  /* 🌐 Responsive styles for mobile */
  @media (max-width: 768px) {
    .link {
      display: none; /* 👈 Hide section (likely links) on phone */
    }

    .maincontainer {
      align-items: flex-start;
      margin-left: 0;
      padding: 20px;
      height: auto;
    }

    h1 {
      font-size: 40px;
    }

    .name {
      font-size: 19px;
    }

    .animation {
      font-size: 25px;
      text-align: left;
    }

    .btn {
      width: 100%;
      max-width: 300px;
      font-size: 14px;
      padding: 2px;
    }
  }
`;

export default Wrapper;
