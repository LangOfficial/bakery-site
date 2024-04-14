// import EmblaCarousel from '/carousel-src/embla-carousel'
// import Autoplay from '/carousel-src/embla-carousel-autoplay'

import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

import "../css/embla.css";

const OPTIONS = { loop: true };

const emblaNode = document.querySelector(".embla");
const viewportNode = emblaNode.querySelector(".embla__viewport");

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [
  Autoplay({ playOnInit: true, delay: 2400 }),
]);
