import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { HiArrowNarrowRight } from 'react-icons/hi'
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
      <div className='maincontainer'>
          <motion.p
          className='name'
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

         <motion.p>
          I specialize in building creating, responsive and user-friendly digital experiences.
          Currently I'm exploring DeveOps concept to complement my full-stack development journey.
         </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
        <Link to="work" smooth={true} duration={500}>
          <button className="btn">
            View Work
            <span><HiArrowNarrowRight /></span>
         </button>
        </Link>
      </motion.div>
        </div>
      </Element>
    </Wrapper>
  )
}

export default Homepage
