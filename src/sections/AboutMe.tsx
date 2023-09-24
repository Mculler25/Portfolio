

export const AboutMe = () => {
  return (
    <section className="mt-10 m-4 mx-10 flex flex-col flex-auto h-screen text-center">
      <div>
        <h2 className="bg-red-500 text-white text-5xl px-4 py-2 tracking-wide text-center">
          About Me
        </h2>
      </div>
      <div className="p-10">
        <p className="text-white text-xl md:text-3xl md:me-2 tracking-wide md:m-3 md:p-4 text-center">
          Full-Stack software engineering student at Thinkful learning to be
          proficient in using Javascript for front-end and back-end
          programming, React, HTML, CSS, API implementing, Node.JS, Express,
          PostgreSQL, and frameworks like Bootstrap.
        </p>
      </div>
      <div className="p-10">
        <p className="text-white text-lg md:text-xl md:me-2 tracking-wide md:m-3 md:p-10 text-center hover:bg-gray-500 hover:text-xl">
          Frontend: HTML, CSS, JavaScript, React
        </p>
        <p className="text-white text-lg md:text-xl md:me-2 tracking-wide md:m-3 md:p-10 text-center hover:bg-gray-500 hover:text-xl">
          Backend: Node.js, Express, RESTful APIs, PostgreSQL
        </p>
        <p className="text-white text-lg md:text-xl md:me-2 tracking-wide p-4 m-3 md:p-10 text-center hover:bg-gray-500 hover:text-xl">
          Tools: Mocha, Chai, Knex, Git, GitHub, Render, Vercel, Node Package
          Manager, Visual Studio Code
        </p>
      </div>
    </section>
  );
};
