import "preline"
import "./style.css";

const menuButton = document.getElementById("menu-button");
const exitMenuButton = document.getElementById("exit-menu-button");
const menu = document.getElementById("menu");

function menuToggle() {
  menu.classList.remove("hidden");
  menu.classList.toggle("animate-slideIn");
  menu.classList.toggle("animate-slideOut");
}

menuButton.addEventListener("click", () => {
  menuToggle();
});

exitMenuButton.addEventListener("click", () => {
  menuToggle();
});

menu.addEventListener("animationend", (e) => {
  if (e.animationName === "slideIn") {
    menu.classList.add("hidden");
  }
});
