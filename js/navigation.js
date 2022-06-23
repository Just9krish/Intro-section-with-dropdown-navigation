const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const navigation = document.querySelector(".navigation");
const body = document.querySelector("body");
const featureArrow = document.querySelector(".feature-arrow-img");
const companyArrow = document.querySelector(".comapany-arrow-img");
const featureToggle = document.querySelector(".feature-toggle");
const companyToggle = document.querySelector(".company-toggle");
const submenu = document.querySelector(".submenu");
const companySubmenu = document.querySelector(".company-submenu");

mobileNavToggle.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible");

  if (visibility === "false") {
    navigation.setAttribute("data-visible", true);
    mobileNavToggle.setAttribute("aria-expanded", true);
    body.style.overflow = "hidden";
  } else {
    navigation.setAttribute("data-visible", false);
    mobileNavToggle.setAttribute("aria-expanded", false);
    body.style.overflow = "auto";
  }
});


featureToggle.addEventListener ("click", () => {
    const visibility = submenu.getAttribute("data-visible")
    featureArrow.classList.toggle('rotate')

    if (visibility === "false") {
        submenu.setAttribute("data-visible", true);
        featureToggle.setAttribute("aria-expanded", true)
      } else {
        submenu.setAttribute("data-visible", false);
        featureToggle.setAttribute("aria-expanded", false);
      }
})

companyToggle.addEventListener ("click", () => {
    const visibility = companySubmenu.getAttribute("data-visible")
    companyArrow.classList.toggle('rotate')

    if (visibility === "false") {
        companySubmenu.setAttribute("data-visible", true);
        companyToggle.setAttribute("aria-expanded", true)
      } else {
        companySubmenu.setAttribute("data-visible", false);
        companyToggle.setAttribute("aria-expanded", false);
      }
})