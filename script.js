const aboutButton = document.querySelector(".about-btn");
const aboutSection = document.querySelector(".about");
const musicBtn = document.querySelector(".music");
const soundBtn = document.querySelectorAll(".sound");

soundBtn.forEach(button => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("event")) {
      button.classList.add("event");
    }

    button.addEventListener("click", () => {
      if (button.classList.contains("event")) {
        button.classList.remove("event");
      } else {
        button.classList.add("event");
      }
    });
  });
});
