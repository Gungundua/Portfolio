import { Link, Element } from "react-scroll";
import html from "../assets/HTML.png";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import java from "../assets/java.svg";
import github from '../assets/git.png';
import sql from '../assets/sql.png';
import linux from "../assets/Tux.svg";
import Wrapper from './style'

const TechStack = () => {
  return (
    <Wrapper>
    <Element name="techstack">
      <div className='container' id='techstack'>
      <div className='content1'>
            <h1>
                Skills
            </h1>
            <p>
                The technologies I've worked with are:
            </p>
        </div>
        <div className='content2'>
          <div className='images'>
            <img src={html} alt="#" />
            <p>HTML</p>
          </div>
          <div className='images'>
            <img src={css} alt="#" />
            <p>CSS</p>
          </div>
          <div className='images'>
          <img src={javascript} alt="#" />
          <p>JAVASCRIPT</p>
          </div>
          <div className='images'>
          <img src={react} alt="#" />
          <p>REACT JS</p>
          </div>
          <div className='images'>
          <img src={java} alt="#" />
          <p>JAVA</p>
          </div>
          <div className='images'>
          <img src={github} alt="#" />
          <p>GITHUB</p>
          </div>
          <div className='images'>
          <img src={sql} alt="#" />
          <p>SQL</p>
          </div>
          <div className='images'>
          <img src={linux} alt="#" />
          <p>LINUX</p>
          </div>
        </div>
      </div>
        </Element>
    </Wrapper>
  )
}

export default TechStack