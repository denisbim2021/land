document.addEventListener("click", function (e) {
    const burgerIcon=document.getElementsByClassName("header-logo__menu-icon"
    )[0];

    const menu=document.getElementsByClassName("header-nav-menu")[0];

    if (e.target===burgerIcon) {
      if (menu.style.transform==='translateY(0px)') {
        //menu.style.display = "none";
        menu.style.transform='translateY(-100px)';
        menu.style.opacity = '0';
      }

      else {
        // menu.style.display = "flex";
        menu.style.transform='translateY(0px)';
        menu.style.opacity = '1';
      }
    }

    else {
      if (!menu.contains(e.target) && menu.style.transform !== '') {
        menu.style.transform='translateY(-100px)';
        menu.style.opacity = '0';
      }
    }
  }

);