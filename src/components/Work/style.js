import styled from "styled-components";

const Wrapper = styled.section`
  .container {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px;
  }

  h2, p {
    text-align: center;
  }

  .image-container {
    position: relative;
    display: inline-block;
    width: 350px;
    height: 200px;
    border-radius: 20px;
    overflow: hidden; /* Prevent overflow */
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
    .mayoor{
    border-radius: 20px;
    }

  .image-container:hover {
    transform: scale(1.05);  /* Slight zoom on hover */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    transition: transform 0.3s ease;
  }
    .link{
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
  }

  .image-container:hover .overlay {
    opacity: 1;   /* Show overlay on hover */
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
`;

export default Wrapper;
