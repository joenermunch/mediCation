const aboutButton = document.querySelector(".about-btn");
const aboutSection = document.querySelector(".about");

aboutButton.addEventListener("click", () => {
  aboutSection.classList.toggle("on");
});
