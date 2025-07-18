import Wrapper from './style'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Links = () => {
  return (
    <Wrapper>
      <div className="links">
        <a href='https://www.linkedin.com/in/gungundua/' className="link-item">
          <FaLinkedin size={24} />
          <span className="label">LinkedIn</span>
        </a>
        <a href='https://github.com/Gungundua' className="link-item">
          <FaGithub size={24} />
          <span className="label">Github</span>
        </a>
        <a href='https://drive.google.com/file/d/1KNKWWV68F7Ba1-XScIpobRHbusO-Rm6L/view?usp=sharing' className="link-item">
          <RiContactsFill size={24} />
          <span className="label">Resume</span>
        </a>
        <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWstxQxVfTtqprQvqXlNMDxDzVwDDCrrqfLzzWdhtXtQWZvXQnhNPzZxtwmPNnCdpBqQjvCVg' className="link-item">
          <MdEmail size={24} />
          <span className="label">E-mail</span>
        </a>
      </div>
    </Wrapper>
  );
};

export default Links;
