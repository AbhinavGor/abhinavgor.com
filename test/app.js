const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links-hamburger");
const links = document.querySelectorAll(".nav-links-hamburger li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});