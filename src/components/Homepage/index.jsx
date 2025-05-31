import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { Link, Element } from 'react-scroll'
import Wrapper from '../Homepage/style'

const Homepage = () => {
  const [text] = useTypewriter({
    words: ['Final-year CSE Undergrad', 'Web Developer'],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 50,
  })

  return (
    <Wrapper>
      <Element name='home'>
      <div className='maincontainer' id='home'>
        <div className='container'>
          <motion.p
            initial={{ opacity: 0, y: -50}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Gungun Dua
          </motion.h1>
          <motion.h2
            className="animation"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I'm a <span>{text}</span>
            <Cursor />
          </motion.h2>
        </div>
      </div>
      </Element>
    </Wrapper>
  )
}

export default Homepage
