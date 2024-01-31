const icontoggle = document.querySelectorAll(".navbar__toggle");
const hamburgerMenu = document.querySelector(".navbar__hamburgerbtn");
const hamburguerline1 = document.querySelectorAll(".line")[0];
const hamburguerline2 = document.querySelectorAll(".line")[1];
const hamburguerline3 = document.querySelectorAll(".line")[2];
const mobileMenu = document.querySelector(".mobile-menu");

function toggleMenu(e) {
  hamburguerline1.classList.toggle("linetop");
  hamburguerline2.classList.toggle("remove");
  hamburguerline3.classList.toggle("linebottom");
  mobileMenu.classList.toggle("open");
}

const getLocal = localStorage.getItem("theme");
getLocal && document.body.classList.add("light-mode");

function toggleTheme(e) {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "ligh-mode");
  } else {
    localStorage.removeItem("theme");
    document.body.removeAttribute("class");
  }
}

hamburgerMenu.addEventListener("click", toggleMenu);
icontoggle.forEach((icon) => {
  icon.addEventListener("click", toggleTheme);
});

// State
// On mount
// Handlers
// Events
