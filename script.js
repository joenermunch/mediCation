const aboutButton = document.querySelector(".about-btn");
const aboutSection = document.querySelector(".about");
const musicBtn = document.querySelector(".music");

aboutButton.addEventListener("click", () => {
  aboutSection.classList.toggle("on");
});

musicBtn.addEventListener("click", () => {
  musicBtn.classList.add("event");
});
