const mobileMenu = () => {
  const hamburgerButton = document.querySelector("#hamburger-button");
  const menuNavigation = document.querySelector("#menu-navigation");

  let isOpen = Boolean(menuNavigation.getAttribute("data-open"));

  if (window.innerWidth > 768) {
    menuNavigation.setAttribute("data-open", false);
    hamburgerButton.setAttribute("aria-expanded", false);
    document.querySelector(".header__link-button").classList.remove("white");
    document.body.style.overflowY = "auto";
  }

  hamburgerButton.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      menuNavigation.setAttribute("data-open", false);
      hamburgerButton.setAttribute("aria-expanded", false);
      document.querySelector(".header__link-button").classList.remove("white");
      document.body.style.overflowY = "auto";
    } else {
      menuNavigation.setAttribute("data-open", true);
      hamburgerButton.setAttribute("aria-expanded", true);
      document.querySelector(".header__link-button").classList.add("white");
      document.body.style.overflowY = "hidden";
    }
  });
};

window.addEventListener("resize", mobileMenu);

export default mobileMenu;
