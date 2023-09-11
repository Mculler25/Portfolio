import jsImage from "./images/js.png";
import reactImage from "./logo.svg";
import tailwind from "./images/tailwing.png"
import html from "./images/html.png";

type Logos = {
  logoImg : string,
  logoName : string
}

export const imageArray : Logos[] = [
  {
    logoImg : jsImage,
    logoName : "JavaScript"
  },
  {
    logoImg : reactImage,
    logoName : "React"
  },
  {
    logoImg : tailwind,
    logoName : "Tailwind"
  },
  {
    logoImg : html,
    logoName : "HTML5"
  }
]