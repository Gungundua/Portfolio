import Wrapper from "./style";
import { useState } from "react";
import WeatherForecast from "../assets/Weather_forecast.png";
import carrental from "../assets/carrental.png";
import Mayoor from "../assets/mayoor.png"

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <div className="container" id="projects">
        <h2>Projects</h2>
        <p>Below is a showcase of some of my projects:</p>

        <div className="mayoor" onClick={toggle}>
          <img src={Mayoor} alt="Weather Forecast" />
          <div className="overlay">
            <h3>Weather Forecast App</h3>
            <p>A JavaScript based weather app that displays current weather conditions using an open weather API.</p>
            <div className="link">
            <a href="https://gungundua.github.io/Weather_Forecast/" target="_blank" rel="noopener noreferrer">
              Demo Code
            </a>
            <a href="https://github.com/Gungundua/Weather_Forecast" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
            </div>
          </div>
        </div>
        <div className="image-container" onClick={toggle}>
          <img src={WeatherForecast} alt="Weather Forecast" />
          <div className="overlay">
            <h3>Weather Forecast App</h3>
            <p>A JavaScript based weather app that displays current weather conditions using an open weather API.</p>
            <div className="link">
            <a href="https://gungundua.github.io/Weather_Forecast/" target="_blank" rel="noopener noreferrer">
              Demo Code
            </a>
            <a href="https://github.com/Gungundua/Weather_Forecast" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
            </div>
          </div>
        </div>
        <div className="image-container" onClick={toggle}>
          <img src={carrental} alt="Car Rental System" />
          <div className="overlay">
            <h3>Car Rental System</h3>
            <p>Designed and developed a robust car rental web application enabling users to browse, book, and manage vehicle rentals efficiently with a user-friendly interface.</p>
            <div className="link">
            {/* <a href="https://gungundua.github.io/Weather_Forecast/" target="_blank" rel="noopener noreferrer">
              Demo Code
            </a> */}
            <a href="https://github.com/Gungundua/Car-Rental-System" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Work;
