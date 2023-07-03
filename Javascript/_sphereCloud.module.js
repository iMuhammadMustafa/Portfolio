const cloudCanvas = document.querySelector(".cloud-sphere");

// const texts = ["Javascript", "HTML5", ".NET", "C#", "TypeScript", "CSS", "PostgreSQL", "MongoDB", "React", "NextJS", "NodeJS", "Redux"];
const texts = [...document.querySelectorAll(".cloud-list>li")].map((el) => el.textContent);

const options = {
  maxSpeed: "normal",
  initSpeed: "normal",
  radius: 250,
};

TagCloud(cloudCanvas, texts, options);
