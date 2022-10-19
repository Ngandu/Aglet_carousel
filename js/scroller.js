// Selectors
const scroller = document.querySelector(".scroller");
const scrollerBar = document.querySelector(".scrollIndicator");
const scrollerBarIndicator = document.querySelector(".scrollIndicator span");

// Variables / states
let scrollWidth = scroller.scrollWidth;
let scrollerChildren = scroller.childElementCount;
let scrollerChild = scrollWidth / scrollerChildren;
let childrenInScreen = window.innerWidth / scrollerChild;
let scrollerBarWidth = scrollerBar.offsetWidth;
let isDown = false;
let startX;
let scrollLeft;

// Modify the width of the indicator
let indicatorWidth =
  scrollerBarWidth / (scrollerChildren - childrenInScreen + 1);
scrollerBarIndicator.style.width = `${parseInt(indicatorWidth)}px`;

// Scroller dragable setup
scroller.addEventListener("mousedown", (e) => {
  isDown = true;
  scroller.classList.add("active");
  startX = e.pageX - scroller.offsetLeft;
  scrollLeft = scroller.scrollLeft;
});
scroller.addEventListener("mouseleave", () => {
  isDown = false;
  scroller.classList.remove("active");
});
scroller.addEventListener("mouseup", () => {
  isDown = false;
  scroller.classList.remove("active");
});
scroller.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scroller.offsetLeft;
  const walk = (x - startX) * 0.8;
  scroller.scrollLeft = scrollLeft - walk;
});

// Indicatior to move as scroll even occures
scroller.addEventListener("scroll", (e) => {
  // How many children scrolled
  let childrenScrolled =
    scrollerChildren - (scrollWidth - scroller.scrollLeft) / scrollerChild;

  // margin left = indicatorWidth * Children scrolled - 1
  let moveBy = indicatorWidth * childrenScrolled;

  scrollerBarIndicator.style.marginLeft = `${parseInt(moveBy)}px`;
});

// When user hover the video will play
const videos = document.querySelectorAll(".scroller video");

videos.forEach((video) => {
  video.addEventListener("mouseover", (e) => {
    video.play();
  });

  video.addEventListener("mouseout", (e) => {
    video.pause();
    video.load();
  });
});
