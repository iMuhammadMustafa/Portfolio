const root = document.querySelector(":root");
const currentTheme = getTheme();
const sunIconSrc = "./Assets/sun-icon.svg";
const MoonIconSrc = "./Assets/moon-icon.svg";

root.setAttribute("data-theme", currentTheme);
document.querySelector("#toggler-icon").src = currentTheme === "dark" ? sunIconSrc : MoonIconSrc;

function getTheme() {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) return storedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light";
}

function toggleThemes() {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", newTheme);

  document.querySelector("#toggler-icon").src = newTheme === "dark" ? sunIconSrc : MoonIconSrc;

  localStorage.setItem("theme", newTheme);
}
