import React , {useState, useEffect} from 'react';
import { imageArray } from './imageArray';
import { Nav } from './sections/Nav';
import { Home } from './sections/Home';
import { AboutMe } from './sections/AboutMe';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {

  const [imageToDisplay, setImageToDisplay] = useState<number>(0);

  const changeLogo = () => {
    setImageToDisplay((prevIndex: number) => (prevIndex + 1) % imageArray.length);
  };

  // Use useEffect to change the logo every 1.5 seconds
  useEffect(() => {
    const timer = setInterval(changeLogo, 1500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
     <Nav />
     <Home imageToDisplay={imageToDisplay}/>
     <AboutMe />
     <Projects />
     <Contact />
    </main>
  );  
}

export default App;
