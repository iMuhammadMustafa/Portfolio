const htmlRoot = document.querySelector(":root");
const currentTheme = getTheme();
const sunIconSrc = "./Assets/sun-icon.svg";
const MoonIconSrc = "./Assets/moon-icon.svg";

htmlRoot.setAttribute("data-theme", currentTheme);
document.querySelector("#toggler-icon").src = currentTheme === "dark" ? sunIconSrc : MoonIconSrc;

function getTheme() {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) return storedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light";
}

document.getElementById("themeToggler").addEventListener("click", toggleThemes);

function toggleThemes() {
  const currentTheme = htmlRoot.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  htmlRoot.setAttribute("data-theme", newTheme);

  document.querySelector("#toggler-icon").src = newTheme === "dark" ? sunIconSrc : MoonIconSrc;

  localStorage.setItem("theme", newTheme);
}
