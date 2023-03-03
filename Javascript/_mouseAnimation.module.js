document.querySelector(".skill-grid").onmousemove = e => {
  for (const container of document.querySelectorAll(".skill-container")) {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    container.style.setProperty("--mouse-x", x + "px");
    container.style.setProperty("--mouse-y", y + "px");
  }
};

document.querySelector(".hero-grid").onmousemove = e => {
  for (const container of document.querySelectorAll(".card-hoverable")) {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    container.style.setProperty("--mouse-x", x + "px");
    container.style.setProperty("--mouse-y", y + "px");
  }
};
