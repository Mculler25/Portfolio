import React from "react";
import myimage from "../images/me.jpg";

// Passed down state to practice doing it
type ImageProps = {
  imageToDisplay: number;
};

export const Home = ({ imageToDisplay }: ImageProps) => {
  return (
    <main className="container mx-auto my-auto">
      <header>
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="p-3 m-3">
            <h1 className="text-white text-center text-4xl md:text-6xl italic tracking-wide">
              Michael Culler
            </h1>
          </div>
          <div className="p-3 m-3">
            <h2 className="text-white text-2xl italic tracking-tight">
              Software Engineer
            </h2>
          </div>
          <div className="border-4 rounded-full overflow-hidden border-gray-200">
            <img src={myimage} alt="me" className="w-60 h-70" />
          </div>
        </div>
      </header>
    </main>
  );
};

