// Add interactivity to navigation menu
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  // Change navbar style on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
