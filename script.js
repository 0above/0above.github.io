// script.js

window.addEventListener("scroll", function () {
  console.log("Scrolling detected!");
  var sidebar = document.querySelector(".side-panel");
  var sticky = sidebar.offsetTop;

  if (window.pageYOffset >= sticky) {
    sidebar.classList.add("sticky");
  } else {
    sidebar.classList.remove("sticky");
  }
});

// Set initial position
var sidebar = document.querySelector(".side-panel");
var sticky = sidebar.offsetTop;

if (window.pageYOffset >= sticky) {
  sidebar.classList.add("sticky");
} else {
  sidebar.classList.remove("sticky");
}
