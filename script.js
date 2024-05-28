window.addEventListener("scroll", function () {
  var sidebar = document.querySelector(".side-panel");
  var sticky = sidebar.offsetTop;

  if (window.pageYOffset >= sticky) {
    sidebar.classList.add("sticky");
  } else {
    sidebar.classList.remove("sticky");
  }
});

// Set initial position on page load
document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.querySelector(".side-panel");
  var sticky = sidebar.offsetTop;

  if (window.pageYOffset >= sticky) {
    sidebar.classList.add("sticky");
  } else {
    sidebar.classList.remove("sticky");
  }
});
