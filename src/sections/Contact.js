import React from "react";

export const Contact = () => {
  return (
    <section className="h-screen mt-10 mx-10">
      <header className="bg-red-500 text-white text-5xl m-10 px-10 py-5 tracking-wide text-center ">
        <h1 className="text-white text-center text-4xl">Contact Me</h1>
      </header>
      <div className="text-center mt-10">
        <p className="text-white text-2xl m-4 tracking-wide">
          <a
            href="https://www.linkedin.com/in/michael-culler/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <p className="text-white text-2xl m-4 tracking-wide">
          Email: mcullerwork@gmail.com
        </p>
      </div>
    </section>
  );
};
