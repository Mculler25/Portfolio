import React , {useState, useEffect} from 'react';
import jsImage from "./images/js.png";
import reactImage from "./logo.svg";
import tailwind from "./images/tailwing.png"
import html from "./images/html.png";
import myimage from "./images/me.jpg"

const imageArray : string[] = [
  jsImage,
  reactImage,
  tailwind,
  html
]

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
      <nav className='border-2 m-3 flex flex-row justify-center p-3'>
        <li className='text-fuchsia-500 text-2xl list-none m-3 tracking-wide'>Home</li>
        <li className='text-fuchsia-500 text-2xl list-none m-3 tracking-wide'>
          <a href="#AboutMe">About Me</a>
        </li>
        <li className='text-fuchsia-500 text-2xl list-none m-3 tracking-wide'>Projects</li>
        <li className='text-fuchsia-500 text-2xl list-none m-3 tracking-wide'>Contact Me</li>
      </nav>
    <div className='container m-5 border-2'>
      <div className='border-2'>
        <div className='flex flex-col justify-center items-center h-80 border-2'>
          <div className='p-3 m-3'>
            <h1 className='text-fuchsia-500 text-5xl m-2 italic tracking-wide'>
              Hello My Name Is Michael
            </h1>
          </div>
          <div className='p-3 m-3'>
            <h2 className='text-fuchsia-500 text-4xl m-2 italic tracking-wide'>
              I am a Software Developer
            </h2>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center h-80 border-2 p-3'>
          <div className='m-3'>
            <h1 className='text-fuchsia-500 text-center text-4xl tracking-wide'>Skills</h1>
          </div>
          <div className='h-60 overflow-hidden transition-opacity m-3'>
            <img src={imageArray[imageToDisplay]} className='w-50 h-40 opacity-100 transition-opacity duration-500 ease-in-out m-3'/>
          </div>
        </div>
        </div>
      </div>
      <div className='container m-3 border-2 flex flex-col justify-center align-center'>
        <div className='border-2 m-2 flex flex-row justify-center items-center h-screen' id='AboutMe'>
          <div className='md:w-1/2'>
            <h2 className='text-fuchsia-500 text-5xl m-5 p-4 tracking-wide text-center border-2'>About Me</h2>
            <p className='text-fuchsia-500 text-3xl me-2 italic tracking-wide m-3 p-4 border-2 text-center'>
              Full-Stack software engineering student at Thinkful learning to be proficient in using Javascript for front-end and back-end programming, React, HTML, CSS, API implementing, Node.JS, Express, PostgreSQL, and frameworks like Bootstrap.
            </p>
            <p  className='text-fuchsia-500 text-2xl me-2 italic tracking-wide m-3 p-4 border-2 text-center'>
              Frontend: HTML, CSS, JavaScript, React
            </p>
            <p className='text-fuchsia-500 text-2xl me-2 italic tracking-wide m-3 p-4 border-2 text-center'>
              Backend: Node.js, Express, RESTful APIs, PostgreSQL
            </p>
            <p className='text-fuchsia-500 text-2xl me-2 italic tracking-wide m-3 p-4 border-2 text-center'>
              Tools: Mocha, Chai, Knex, Git, GitHub, Render, Vercel, Node Package Manager, Visual Studio Code
            </p>
          </div>
          <div className='border-2 p-3 m-3'>
            <img src={myimage} className='w-60 h-70' alt='My Image' />
          </div>
        </div>
      </div>
    </main>
  );  
}

export default App;
