const canvas = document.getElementById("stars-canvas");
const canvasContainer = document.querySelector(".intro");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvasContainer.height = window.innerHeight;
canvasContainer.width = window.innerWidth;

window.addEventListener("resize", event => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvasContainer.height = window.innerHeight;
  canvasContainer.width = window.innerWidth;
  starsCount = 65 * (canvas.width / canvas.height);
  DrawStars();
});

let stars = [], // Array that contains the stars
  FPS = 60, // Frames per second
  // starsCount = 65 * (canvas.width / canvas.height), // Number of stars 65
  starsCount = 200 * (canvas.width / canvas.height), // Number of stars
  mouse = {
    x: 0,
    y: 0,
  }; // mouse location

//Push Stars into array
for (let i = 0; i < starsCount; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() / 2,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25,
  });
}

//Draw
function DrawStars() {
  let starsColor = getComputedStyle(document.documentElement).getPropertyValue("--text-100");
  let lineColor = getComputedStyle(document.documentElement).getPropertyValue("--primary-100");
  //Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   ctx.globalCompositeOperation = "lighter";
  for (let star of stars) {
    //Draw a circle path
    ctx.strokeStyle = starsColor;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.stroke();
    //Fill the circle
    ctx.fillStyle = starsColor;
    ctx.fill();
  }
  //Draw the lines between stars
  for (let i = 0; i < stars.length; i++) {
    let starI = stars[i];
    ctx.strokeStyle = "rgb(81, 162, 233)";
    ctx.lineWidth = 0.3;
    if (starsDistance(mouse, starI) < 50 && mouse.x != 0 && mouse.y != 0) {
      ctx.beginPath();
      ctx.moveTo(starI.x, starI.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }

    if (starsDistance(mouse, starI) < 300) {
      if (mouse.x == 0 && mouse.y == 0) {
        mouse.x = canvas.width / 2;
        mouse.y = canvas.height / 2;
      }
      for (let j = 0; j < stars.length; j++) {
        let starJ = stars[j];
        if (starsDistance(starI, starJ) < 100) {
          ctx.beginPath();
          ctx.moveTo(starI.x, starI.y);
          ctx.lineTo(starJ.x, starJ.y);
          ctx.stroke();
        }
      }
    }
  }

  // for (let i = 0; i < stars.length; i++) {
  //   let starI = stars[i];
  //   ctx.beginPath();
  //   // ctx.strokeStyle = lineColor;
  //   ctx.lineWidth = 0.05;
  //   ctx.moveTo(starI.x, starI.y);
  //   if (starsDistance(mouse, starI) < 150 && mouse.x != 0 && mouse.y != 0) {
  //     ctx.lineWidth = 0.1;
  //     ctx.lineTo(mouse.x, mouse.y);
  //   }
  //   for (let j = 0; j < stars.length; j++) {
  //     let starJ = stars[j];
  //     if (starsDistance(starI, starJ) < 100) {
  //       ctx.lineTo(starJ.x, starJ.y);
  //     }
  //   }
  //   ctx.stroke();
  // }
}

//Push Stars away from mouse
// while (starsDistance(mouse, starI) < 100 && mouse.x != 0 && mouse.y != 0) {
//   starI.x += starI.vx / FPS;
//   starI.y += starI.vy / FPS;
// }

function starsDistance(point1, point2) {
  let distanceX = point2.x - point1.x;
  let distanceY = point2.y - point1.y;

  let distance = distanceY * distanceY + distanceX * distanceX;

  return Math.sqrt(distance);
}

function updateStars() {
  for (let star of stars) {
    star.x += star.vx / FPS;
    star.y += star.vy / FPS;

    // star.x += (Math.cos(star.vx) / FPS) * 1.5;
    // star.y += (Math.sin(star.vy) / FPS) * 1.5;

    if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
    if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
  }
}

canvasContainer.addEventListener("mousemove", e => {
  // mouse.x = e.offsetX;
  // mouse.y = e.offsetY;

  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function tickStars() {
  DrawStars();
  updateStars();
  requestAnimationFrame(tickStars);
}

tickStars();
