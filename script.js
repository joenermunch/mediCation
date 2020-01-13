const aboutButton = document.querySelector(".about-btn");
const aboutSection = document.querySelector(".about");
const musicBtn = document.querySelector(".music");

musicBtn.addEventListener("click", () => {
  if (!musicBtn.classList.contains("event")) {
    musicBtn.classList.add("event");
  }

  musicBtn.addEventListener("click", () => {
    if (musicBtn.classList.contains("event")) {
      musicBtn.classList.remove("event");
    } else {
      musicBtn.classList.add("event");
    }
  });
});
