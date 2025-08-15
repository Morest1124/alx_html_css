// Hamburger menu for top left, nav pops below header content

document.addEventListener("DOMContentLoaded", function () {
  let burger = document.getElementById("burger-menu");
  let menu = document.getElementById("nav-menu");
  if (burger && menu) {
    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.classList.toggle("show");
    });
    // Hide menu when clicking a link (for mobile UX)
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 62.5) {
          menu.classList.remove("show");
        }
      });
    });
    // Hide menu if clicking outside
    document.addEventListener("click", function (e) {
      if (window.innerWidth <= 62.5 && menu.classList.contains("show")) {
        if (!menu.contains(e.target) && !burger.contains(e.target)) {
          menu.classList.remove("show");
        }
      }
    });
    // Hide menu if resizing to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > 62.5) {
        menu.classList.remove("show");
      }
    });
  }
});
