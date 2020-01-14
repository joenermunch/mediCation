const aboutButton = document.querySelector(".about-btn");
const aboutSection = document.querySelector(".about");
const mainSection = document.querySelector("main");
const musicBtn = document.querySelector(".music");
const soundBtn = document.querySelectorAll(".sound");
const audioRain = document.getElementById("audio-rain");
const audioMusic = document.getElementById("audio-music");
const audioFire = document.getElementById("audio-fire");
const audioOcean = document.getElementById("audio-ocean");

audioRain.loop = true;
audioMusic.loop = true;
audioFire.loop = true;
audioOcean.loop = true;

soundBtn.forEach(button => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("event")) {
      button.classList.add("event");

      if (button.classList.contains("rain")) {
        audioRain.play();
      }
      if (button.classList.contains("music")) {
        audioMusic.play();
      }
      if (button.classList.contains("fire")) {
        audioFire.play();
      }
      if (button.classList.contains("ocean")) {
        audioOcean.play();
      }
    }

    button.addEventListener("click", () => {
      if (button.classList.contains("event")) {
        button.classList.remove("event");
        if (button.classList.contains("rain")) {
          audioRain.pause();
        }
        if (button.classList.contains("music")) {
          audioMusic.pause();
        }
        if (button.classList.contains("fire")) {
          audioFire.pause();
        }
        if (button.classList.contains("ocean")) {
          audioOcean.pause();
        }
      } else {
        button.classList.add("event");
        if (button.classList.contains("rain")) {
          audioRain.play();
        }
        if (button.classList.contains("music")) {
          audioMusic.play();
        }
        if (button.classList.contains("fire")) {
          audioFire.play();
        }
        if (button.classList.contains("ocean")) {
          audioOcean.play();
        }
      }
    });
  });
});

aboutButton.addEventListener("click", () => {
  if (mainSection.style.display !== "none") {
    mainSection.style.display = "none";
    aboutSection.style.display = "flex";
  } else {
    mainSection.style.display = "flex";
    aboutSection.style.display = "none";
  }
});
