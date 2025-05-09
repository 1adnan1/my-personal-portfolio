import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="bg-[#0f172a] text-white scroll-smooth">

      <Header/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
     
    </div>
  );
}
;
export default App;