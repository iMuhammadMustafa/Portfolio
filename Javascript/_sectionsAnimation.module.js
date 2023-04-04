const hiddenSections = document.querySelectorAll(".hidden-section");
const hiddenParts = document.querySelectorAll(".hidden-part");
const sectionObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden-section");
      }
      // else {
      //   entry.target.classList.add("hidden-section");
      // }
    });
  },
  { threshold: [0.3] }
);
const partsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden-part");
      }
      // else {
      //   entry.target.classList.add("hidden-part");
      // }
    });
  },
  { threshold: [0.3] }
);

hiddenSections.forEach(section => {
  sectionObserver.observe(section);
});
hiddenParts.forEach(part => {
  partsObserver.observe(part);
});

//observer.unobserve(entry.target);
