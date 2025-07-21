import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .links {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 7px;
    z-index: 10;
  }

  a {
    text-decoration: none;
  }

  .link-item {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1e1e3f;
    padding: 10px;
    border-radius: 10px;
    width: 50px;
    height: 50px;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    white-space: nowrap;
    color: white;
    font-family: Arial, sans-serif;
    gap: 8px;
    cursor: pointer;
  }

  .link-item .label {
    display: none;
    font-size: 14px;
  }

  .link-item:hover {
    width: 160px;
    justify-content: flex-start;
  }

  .link-item:hover .label {
    display: inline;
  }

  .link-item.expanded {
    width: 160px;
    justify-content: space-between;
  }

  .link-item.expanded .label {
    display: inline;
  }

  // /* === Responsive Styles for Mobile === */
  @media (max-width: 768px) {

  .links{
  display: none;
  }
  //   .links {
  //     flex-direction: row;
  //     top: auto;
  //     left: 50%;
  //     transform: translateX(-50%);
  //     gap: 20px;
  //     height: 50px;
  //   }

    .link-item {
      width: 40px;
      height: 40px;
      background-color: transparent;
    }

    .link-item:hover {
      width: 40px;
      // justify-content: center;
      background-color: transparent;
    }

  //   .link-item:hover .label {
  //     display: none;
  //   }

  //   // .link-item .label {
  //   //   display: none !important;
  //   // }
  }
`;

export default Wrapper;
