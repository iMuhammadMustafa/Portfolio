let navBarToggler = document.querySelector(".menu-toggler");
let navBarNav = document.querySelector(".navbar-nav");

navBarToggler.addEventListener("click", () => {
  navBarToggler.classList.toggle("toggle");
  navBarNav.classList.toggle("expand");
});
document.querySelector("main").addEventListener("click", () => {
  navBarToggler.classList.remove("toggle");
  navBarNav.classList.remove("expand");
});
