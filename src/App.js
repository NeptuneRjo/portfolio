import './App.css';
import { About, Contact, Hero, Projects } from './components';
import { ParallaxProvider } from 'react-scroll-parallax'
import Menu from './components/Menu/Menu';


function App() {
  return (
    <ParallaxProvider>
      <div className="app-main">
        <Menu />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </ParallaxProvider>
  );
}

export default App;
