import React from "react";
import myimage from "../images/me.jpg";

export const AboutMe = () => {
  return (
    <section className="container m-3 flex flex-col justify-center align-center">
      <div
        className="m-2 flex flex-row justify-center items-center h-screen"
        id="AboutMe"
      >
        <section className="md:w-1/2">
          <h2 className="text-red-500 text-5xl m-5 p-4 tracking-wide text-center">
            About Me
          </h2>
          <p className="text-black-500 text-3xl me-2 tracking-wide m-3 p-4 text-center">
            Full-Stack software engineering student at Thinkful learning to be
            proficient in using Javascript for front-end and back-end
            programming, React, HTML, CSS, API implementing, Node.JS, Express,
            PostgreSQL, and frameworks like Bootstrap.
          </p>
          <p className="text-black-500 text-2xl me-2  tracking-wide m-3 p-4 text-center">
            Frontend: HTML, CSS, JavaScript, React
          </p>
          <p className="text-black-500 text-2xl me-2  tracking-wide m-3 p-4 text-center">
            Backend: Node.js, Express, RESTful APIs, PostgreSQL
          </p>
          <p className="text-black-500 text-2xl me-2  tracking-wide m-3 p-4 text-center">
            Tools: Mocha, Chai, Knex, Git, GitHub, Render, Vercel, Node Package
            Manager, Visual Studio Code
          </p>
        </section>
        <div className="p-3 m-3">
          <img src={myimage} className="w-60 h-70" alt="Me" />
        </div>
      </div>
    </section>
  );
};
