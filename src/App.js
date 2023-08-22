import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <h1>Victoriya tech</h1>
      </header>
      <Gallery />
      <About />
      <Contact />
      <Navbar />
    </div>
  );
}

export default App;
