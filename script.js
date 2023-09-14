// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll("header nav a");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Remove toggle icon and navbar when clicking navbar links (scrolling)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

// Scroll sections
let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Active navbar links
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector('header nav a[href*="' + id + '"]')
          .classList.add("active");
      });
      //active section for animation on scroll
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  // Hide navbar on scroll
  if (window.innerWidth < 769) {
    if (scrollPosition > window.scrollY) {
      navbar.style.transform = "translateX(0)";
    } else {
      navbar.style.transform = "translateX(-100%)";
    }
    scrollPosition = window.scrollY;
  }
};

// Hide navbar menu on outside click in mobile view
document.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.closest(".navbar") && !target.closest("#menu-icon")) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
});

// Show navbar on menu icon click in mobile view
menuIcon.addEventListener("click", () => {
  if (window.innerWidth < 769) {
    navbar.style.transform = "translateX(0)";
  }
});

// Hide navbar on scroll in mobile view
window.addEventListener("scroll", () => {
  if (window.innerWidth < 769) {
    navbar.style.transform = "translateX(-100%)";
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
});

// Sticky header
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});
