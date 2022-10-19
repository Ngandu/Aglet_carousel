// Selectors
const mobilemenu = document.querySelector(".mobile-menu");
const mobileMenu = document.querySelector(".mobileMenu");

let menuOpen = false;

// Handle Mobile Menu
mobilemenu.addEventListener("click", () => {
  if (!menuOpen) {
    mobileMenu.classList.add("open");
    menuOpen = !menuOpen;
    mobilemenu.src = "./src/close.svg";
  } else {
    mobileMenu.classList.remove("open");
    menuOpen = !menuOpen;
    mobilemenu.src = "./src/menu.svg";
  }
});
