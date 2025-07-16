import './App.css'
import NavBar from './components/NavBar';
import HomePage from "./components/Homepage";
// import About from './components/About';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {

  return (
    <>
    <NavBar/>
    <div id='home'>
    <HomePage/>
    </div>
    <div id='techstack'>
    <TechStack/>
    </div>
    <div id='work'>
    <Work/>
    </div>
    <div id='contact'>
    <Contact/>
    </div>
    </>
  )
}

export default App
