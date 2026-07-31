const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero-section");
const updateNavbar = () => {
  const threshold = hero.offsetHeight - navbar.offsetHeight;
  if (window.scrollY > threshold) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", updateNavbar);
window.addEventListener("resize", updateNavbar);
updateNavbar();

const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.20 }
);
revealEls.forEach((el) => revealObserver.observe(el));