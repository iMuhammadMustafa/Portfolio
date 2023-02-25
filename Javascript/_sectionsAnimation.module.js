const hiddenSections = document.querySelectorAll(".hidden-section");
const sectionsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden-section");
        //observer.unobserve(entry.target);
      } else {
        entry.target.classList.add("hidden-section");
      }
    });
  },
  { threshold: [0.3] }
);
hiddenSections.forEach(section => {
  sectionsObserver.observe(section);
});
