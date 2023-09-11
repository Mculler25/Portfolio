import React from "react";
import { imageArray } from "../imageArray";

//passed down state to practice doing it
type ImageProps = {
  imageToDisplay: number;
};

export const Home = ({ imageToDisplay }: ImageProps) => {
  return (
    <main className="container m-5">
      <header>
        <div className="flex flex-col justify-center items-center h-80">
          <div className="p-3 m-3">
            <h1 className="text-red-500 text-5xl m-2 italic tracking-wide">
              Michael Culler
            </h1>
          </div>
          <div className="p-3 m-3">
            <h2 className="text-black-500 text-4xl m-2 italic tracking-tight">
              Software Developer
            </h2>
          </div>
        </div>
      </header>
      <section className="flex flex-col justify-center items-center h-80  p-3">
        <div className="m-3">
          <h1 className="text-red-500 text-center text-4xl tracking-tight">
            Technologies
          </h1>
        </div>
        <div className="h-60 overflow-hidden transition-opacity p-3">
          <img
            src={imageArray[imageToDisplay].logoImg}
            alt="different logos"
            className="w-50 h-40 opacity-100 transition-opacity duration-500 ease-in-out m-3"
          />
          <p className="text-black-500 text-center text-2xl tracking-tight">
            {imageArray[imageToDisplay].logoName}
          </p>
        </div>
      </section>
    </main>
  );
};
