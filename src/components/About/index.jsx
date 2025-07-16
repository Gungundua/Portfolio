import React from "react";
import { Element } from "react-scroll";
import Wrapper from "./style";

const About = () => {
  return (
    <Wrapper>
      <Element name="about">
        <div className="container">
          <div className="right">
            <div className="heading">
              <div className="content1">About</div>
            </div>
            <div className="content2">
              <p>
                As a passionate front-end developer, I bring creativity and precision to every project.
                With a keen eye for design and knack for clean code, I craft engaging web experiences that captivate users.
                Let's collaborate to bring your vision to life with cutting-edge technology and intuitive design.
              </p>
            </div>
          </div>
        </div>
      </Element>
    </Wrapper>
  );
};

export default About;
