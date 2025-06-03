import logo from './logo.svg';
import './App.css';
import About from "./components/About"
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Hero from './components/Hero';

function App() {
  return (
    <main className="text-gray-100 bg-gray-900 body-font">

    <Navbar />
    <Hero />
    <About/>
    <Skills />
    <Projects />
    <Contact />
    {/*
    
    <Testimonials />
  */}
  </main>
  );
}

export default App;
