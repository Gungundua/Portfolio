import styled from "styled-components";

const Wrapper = styled.section`
  .maincontainer {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    flex-direction: column;
  }

  .heading {
    font-size: 28px;
    margin-bottom: 20px;
    display: inline-block;
    border-bottom: 4px solid rgb(243, 80, 129);
    text-align: center;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
  }

  .name,
  .email,
  .comment {
    width: 90%;
    max-width: 600px;
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
    }
  }

  .comment {
    resize: vertical;
  }

  .btn {
    display: flex;
    justify-content: center;
    height: 70px;
    align-items: center;
    margin-top: 20px;
  }

  .submitbtn {
    width: 50%;
    height: 40px;
    border-radius: 30px;
    background-color: transparent;
    color: white;
    border: 2px solid white;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  /* Media Query for tablets/laptops/desktops */
  @media screen and (min-width: 768px) {
    .maincontainer {
      flex-direction: column;
    }

    .heading {
      font-size: 35px;
      border-bottom: 5px solid rgb(243, 80, 129);
    }

    .inputs {
      width: 100%;
    }

    .name,
    .email,
    .comment {
      width: 100%;
    }

    .submitbtn {
      width: 30%;
      font-size: 16px;
    }
  }
`;

export default Wrapper;
