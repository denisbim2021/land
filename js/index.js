document.addEventListener("click", function (e) {
  const burgerIcon = document.getElementsByClassName(
    "header-logo__menu-icon"
  )[0];

  const menu = document.getElementsByClassName("header-nav-menu")[0];

  if (e.target === burgerIcon) {
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  } else {
    if (!menu.contains(e.target)) {
      menu.style.display = "none";
    }
  }
});
