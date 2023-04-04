const cloudCanvas = document.querySelector(".cloud-sphere");

// const texts = ["Javascript", "HTML5", ".NET", "C#", "TypeScript", "CSS", "PostgreSQL", "MongoDB", "React", "NextJS", "NodeJS", "Redux"];
const texts = [...document.querySelectorAll(".cloud-list>li")].map(el => el.textContent);

options = {
  maxSpeed: "normal",
  initSpeed: "normal",
  radius: 300,
};

TagCloud(cloudCanvas, texts, options);
