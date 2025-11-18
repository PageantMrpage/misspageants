import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Finale from './components/Finale';
import Gallery from './components/Gallery';
import Collaborators from './components/Collaborators';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0C20] overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Journey />
      <Finale />
      <Gallery />
      <Collaborators />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
