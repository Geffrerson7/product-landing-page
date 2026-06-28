/* ── Hamburger ── */
const hamburger = document.querySelector(".btn-hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("nav-overlay");

function toggleMenu(open) {
  hamburger.classList.toggle("is-open", open);
  mobileMenu.classList.toggle("is-open", open);
  overlay.classList.toggle("is-visible", open);
  hamburger.setAttribute("aria-expanded", open);
  mobileMenu.setAttribute("aria-hidden", !open);
  document.body.style.overflow = open ? "hidden" : "";
}

hamburger.addEventListener("click", () =>
  toggleMenu(!mobileMenu.classList.contains("is-open")),
);
overlay.addEventListener("click", () => toggleMenu(false));
mobileMenu
  .querySelectorAll("a")
  .forEach((l) => l.addEventListener("click", () => toggleMenu(false)));

/* ── Header frosted-glass on scroll ── */
const header = document.querySelector("header");
const onScroll = () =>
  header.classList.toggle("is-scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ── Reveal on scroll ── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
);

document
  .querySelectorAll("[data-reveal]")
  .forEach((el) => observer.observe(el));
