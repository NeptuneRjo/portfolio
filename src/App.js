import './App.css';
import { About, Contact, Header, Projects } from './components';

function App() {
  return (
    <div className="app-main">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
