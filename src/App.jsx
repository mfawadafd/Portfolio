import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return <div className="bg-[#171d32] h-auto w-full overflow-hidden">
  <Navbar/>
  <Home/>
  <About/>
  <Experience/>
  <Projects/>
  <Footer/>
  </div>
}

export default App;

