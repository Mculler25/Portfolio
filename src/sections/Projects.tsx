
import restaurantRes from "../images/dashboard.png";
import WeLoveMovies from "../images/WeLoveMovies.png";
import Flashcard from "../images/Flashcard.png";

export const Projects = () => {
  return (
    <main id="Projects" className="overflow-hidden">
      <header className="bg-red-500 text-white text-5xl m-10 px-10 py-5 tracking-wide text-center ">
        Projects
      </header>
      <div className="flex flex-col justify-center align-center md:mx-20">
        <section className="flex flex-col justify-center md:mt-10">
          <div className="border m-4 md:mx-20 hover:bg-gray-500">
            <div className="p-3 m-3 flex flex-row">
              <div className="text-center md:mx-10">
                <p className="text-white text-xl m-2 p-2 tracking-wide">
                  Restaurant Reservations
                </p>
                <a
                  href="https://restaurantreservations-ytnz.onrender.com/dashboard"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-xl m-2 p-2 tracking-wide hover:underline"
                >
                  Website
                </a>
                <a
                  href="https://github.com/Mculler25/Restaurant-Reservations"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-xl m-2 p-2 tracking-wide hover:underline"
                >
                  Github
                </a>
                <div>
                  <p className="text-white text-md m-2 p-2 md:mx-10">
                    This is my restaurant reservations project. The purpose of
                    This app for restaurant to be able to deal with
                    reservations. You can make a reservations, search for one by
                    phone number, create a new table, seat people at the table,
                    and cancel reservations.
                  </p>
                </div>
              </div>
              <div className="m-2 md:mx-10">
                <p className="text-white text-md tracking-wide text-center">
                  Tools
                </p>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-md m-2 p-2 tracking-wide">
                    React
                  </p>
                  <p className="text-white text-md m-2 p-2 tracking-wide">
                    Express
                  </p>
                  <p className="text-white text-md m-2 p-2 tracking-wide">
                    JavaScript
                  </p>
                  <p className="text-white text-md m-2 p-2 tracking-wide">
                    Knex
                  </p>
                  <p className="text-white text-md m-2 p-2 tracking-wide">
                    Render
                  </p>
                  <p className="text-white text-md m-2 p-2 tracking-wide">
                    Bootstrap
                  </p>
                </div>
              </div>
              <div className="block sm:hidden md:hidden lg:border lg:rounded-full lg:mx-10 lg:overflow-hidden lg:flex lg:justify-end lg:items-center lg:fill">
                <img
                  src={restaurantRes}
                  alt="restaurant reservation project"
                  className="fill m-auto"
                />
              </div>
            </div>
          </div>
          <div className="border hover:bg-gray-500 md:mx-20 m-4">
            <div className="p-3 m-3 flex flex-row">
              <div className="text-center md:mx-10">
                <p className="text-white text-xl m-2 p-2 tracking-wide">
                  We Love Movies
                </p>
                <a
                  href="https://welovemoviesfrontend-dt41.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-xl m-2 p-2 tracking-wide hover:underline"
                >
                  Website
                </a>
                <a
                  href="https://github.com/Mculler25/WeLoveMovies"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-xl m-2 p-2 tracking-wide hover:underline"
                >
                  Github
                </a>
                <div>
                  <p className="text-white text-md m-2 p-2 md:mx-10">
                    This is my We Love Moves project in which I built out a
                    RESTful Api. This app will display different data of moves,
                    theaters, and reviews.
                  </p>
                </div>
              </div>
              <div className="m-2 md:mx-14">
                <p className="text-white text-md tracking-wide text-center">
                  Tools
                </p>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-md m-2 p-2 tracking-wide">
                    Express
                  </p>
                  <p className="text-white text-md m-2 p-2 tracking-wide">
                    JavaScript
                  </p>
                  <p className="text-white text-md m-2 p-2 tracking-wide">
                    Knex
                  </p>
                  <p className="text-white text-md m-2 p-2 tracking-wide">
                    Render
                  </p>
                </div>
              </div>
              <div className="block sm:hidden md:hidden lg:border lg:rounded-full lg:mx-10 lg:overflow-hidden lg:flex lg:justify-end lg:items-center lg:fill">
                <img
                  src={WeLoveMovies}
                  alt="we love movies project"
                  className="fill m-auto"
                />
              </div>
            </div>
          </div>
          <div className="border m-4 hover:bg-gray-500 md:mx-20">
            <div className="p-3 m-3 flex flex-row">
              <div className="text-center md:mx-10">
                <p className="text-white text-xl m-2 p-2 tracking-wide">
                  Flashcard App
                </p>
                <a
                  href="https://flashcard-app-0i53.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-xl m-2 p-2 tracking-wide hover:underline"
                >
                  Website
                </a>
                <a
                  href="https://github.com/Mculler25/Flashcard-App"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-xl m-2 p-2 tracking-wide hover:underline"
                >
                  Github
                </a>
                <div>
                  <p className="text-white text-md m-2 p-2 md:mx-10">
                    This is my Flashcard App project. You can use this app to
                    help you study. Here you can study, create, and delete decks
                    of cards.
                  </p>
                </div>
              </div>
              <div className="m-2 md:mx-10">
                <p className="text-white text-md tracking-wide text-center">
                  Tools
                </p>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-md m-2 p-2 md:tracking-wide">
                    {" "}
                    JavaScript
                  </p>
                  <p className="text-white text-md m-2 p-2 md:tracking-wide">
                    {" "}
                    React
                  </p>
                  <p className="text-white text-md m-2 p-2 md:tracking-wide">
                    {" "}
                    Bootstrap
                  </p>
                  <p className="text-white text-md m-2 p-2 md:tracking-wide">
                    {" "}
                    Render
                  </p>
                </div>
              </div>
              <div className="block sm:hidden md:hidden lg:border lg:rounded-full lg:mx-10 lg:overflow-hidden lg:flex lg:justify-end lg:items-center lg:fill">
                <img
                  src={Flashcard}
                  alt="we love movies project"
                  className="fill m-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
