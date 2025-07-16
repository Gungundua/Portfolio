import React from 'react'
import { Element } from "react-scroll";
import Wrapper from "../Contact/style"

const Contact = () => {
  return (
    <Wrapper>
      <Element name='contact'>
        <div className='maincontainer'>
          <div className='heading'>Contact me</div>
        </div>
        {/* Replace Form with actual form tag and action URL from Getform */}
        <form action="https://getform.io/f/bjjordmb" method="POST">
          <div className='inputs'>
            <input
              className='name'
              type="text"
              placeholder='Name'
              name='name'
              required
            />
            <input
              className='email'
              type="email"
              placeholder='Email'
              name='email'
              required
            />
            <textarea
              className="comment"
              name='message'
              rows="10"
              placeholder='Message'
              required
            ></textarea>
          </div>
          <div className='btn'>
            <input type="submit" value="Submit" className='submitbtn' />
          </div>
        </form>
      </Element>
    </Wrapper>
  );
};

export default Contact;
