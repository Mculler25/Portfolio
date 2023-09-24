
import { Nav } from './sections/Nav';
import { Home } from './sections/Home';
import { AboutMe } from './sections/AboutMe';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {
  return (
    <main>
     <Nav />
     <Home />
     <AboutMe />
     <Projects />
     <Contact />
    </main>
  );  
}

export default App;
