import Wrapper from "./style";
import { useState } from "react";
import { Element } from "react-scroll";
import WeatherForecast from "../assets/Weather_forecast.png";
import carrental from "../assets/carrental.png";
import Mayoor from "../assets/mayoor.png"
import anshievents from "../assets/anshievents.png"
import { motion } from "framer-motion";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Element name="work">
      <div className="heading">
        <h2>Projects</h2>
      </div> 
      <div>
        </div> 
      <div className="projectsContainer">
      <motion.div className="image-container" onClick={toggle} 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}  >
          <img src={Mayoor} alt="Weather Forecast" />
          <div className="overlay">
            <h3>Mayoor+</h3>
            <p>It's a full stack project named - Outcome based grading system which calculates the outcomes of the grades with the help of some backend calculations and mapping.</p>
            <div className="link">
            <a href="https://mayoor-web.vercel.app" target="_blank" rel="noopener noreferrer">
              Demo Code
            </a>
            <a href="https://github.com/Gungundua/Mayoor-FrontEnd/" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="image-container" onClick={toggle}
               initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}>
          <img src={anshievents} alt="Anshi Events" />
          <div className="overlay">
            <h3>Anshi Events</h3>
            <p>An Event organizer website for a company named Anshi Events. The site is live now and you can visit it just click on Demo Code.</p>
            <div className="link">
            <a href="https://www.anshievent.com/" target="_blank" rel="noopener noreferrer">
              Demo Code
            </a>
            <a href="https://github.com/Gungundua/Event-Site" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
            </div>
          </div>
        </motion.div>
        <motion.div className="image-container" onClick={toggle}
               initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}>
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
        </motion.div>
        <motion.div className="image-container" onClick={toggle}
               initial={{ opacity: 0, x: 1000 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}>
          <img src={carrental} alt="Car Rental System" />
          <div className="overlay">
            <h3>Car Rental System</h3>
            <p>Designed and developed a robust car rental web application enabling users to browse, book, and manage vehicle rentals efficiently with a user-friendly interface.</p>
            <div className="link">
            <a href="https://github.com/Gungundua/Car-Rental-System" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
            </div>
          </div>
        </motion.div>
        </div>

      </Element>
    </Wrapper>
  );
};

export default Work;