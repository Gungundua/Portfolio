import './App.css'
import NavBar from './components/NavBar';
import HomePage from "./components/Homepage";
// import About from './components/About';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Contact from './components/Contact';
import Links from './components/Links';

const App = () => {

  return (
    <div
  style={{
    background: "linear-gradient(to top, #080812, #2f2f5f)",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // to ensure it fills the screen
  }}
>
  <NavBar />
  <div id="home">
    <HomePage />
  </div>
  <div id="techstack">
    <TechStack />
  </div>
  <div id="work">
    <Work />
  </div>
  <div id="contact">
    <Contact />
  </div>
</div>

  )
}

export default App
