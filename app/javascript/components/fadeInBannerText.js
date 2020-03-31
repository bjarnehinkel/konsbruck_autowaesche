import { animations } from "animations.js"

const header = document.querySelector('.banner-text');
const cardsHeader = document.querySelector('.cards-header');

const fadeInUp = {
  easing: "ease",
  transform: [
    "translate3d(0, 100%, 0)",
    "translate3d(0, 0, 0)"
  ],
  transformOrigin: [
    "center",
    "center"
  ],
  opacity: [
    0,
    1
  ]
};

const timing = {
  duration: 1000,
  fill: "forwards",
  iterations: 1,
  delay: 0,
  endDelay: 0
};

const fadeInBannerText = () => {
  header.animate(fadeInUp, timing);
  cardsHeader.animate(fadeInUp, timing);
};

export { fadeInBannerText };
