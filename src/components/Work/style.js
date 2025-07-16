import styled from "styled-components";

const Wrapper = styled.section`
  .heading {
    color: white;
    display: flex;
    justify-content: center;
    font-size: 25px;
    margin-bottom: 30px;
  }

  h2 {
    display: inline-block;
    border-bottom: 5px solid rgb(243, 80, 129);
  }

  p {
    text-align: center;
  }

  .projectsContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    justify-items: center;
  }

  .image-container {
    position: relative;
    height: 250px;
    width: 350px;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-container:hover {
    transform: scale(1.05);
  }

  .mayoor:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .link {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ddd;
    color: #030303;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 20px;
    box-sizing: border-box;
    border-radius: inherit;
  }

  .image-container:hover .overlay,
  .mayoor:hover .overlay {
    opacity: 1;
  }

  .overlay h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .overlay p {
    font-size: 14px;
    margin-bottom: 15px;
  }

  .overlay a {
    color: #61dafb;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
  }

  .overlay a:hover {
    text-decoration: underline;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .image-container {
      width: 90%;
      height: auto;
    }

    .projectsContainer {
      grid-template-columns: 1fr;
    }
  }
`;

export default Wrapper;
 