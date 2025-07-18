import { useState } from 'react';
import { Link } from 'react-scroll';
import Wrapper from '../NavBar/style';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import Links from "../Links/index"
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const name = "Gungun Dua";
    const initials = name.split(" ").map(word => word[0]).join("").toUpperCase();

    return (
        <Wrapper>
            <nav className='navbar'>
                <div className='content1'>
                    <div className='initials'>
                        {initials}
                    </div>
                </div>

                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <Link to='home' smooth={true} duration={500}>Home</Link>
                    {/* <Link to='about' smooth={true} duration={500}>About</Link> */}
                    <Link to='techstack' smooth={true} duration={500}>Skills</Link>
                    <Link to='work' smooth={true} duration={500}>Projects</Link>
                    <Link to='contact' smooth={true} duration={500}>Contact me</Link>
                </div>

                <div className='hamburger' onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </nav>
        </Wrapper>
    );
};
export default NavBar;
