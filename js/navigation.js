const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const navigation = document.querySelector(".navigation");

mobileNavToggle.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible");

  if (visibility === "false") {
    navigation.setAttribute("data-visible", true);
    mobileNavToggle.setAttribute("aria-expanded", true);
  } else {
    navigation.setAttribute("data-visible", false);
    mobileNavToggle.setAttribute("aria-expanded", false);
  }
});
