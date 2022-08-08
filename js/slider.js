let offset = 0;
const sliderLine = document.querySelector(".slider-line");
const sliderText = document.querySelector(".slider-text");

document.querySelector(".slider-left").addEventListener("click", function () {
  offset += 140;
  if (offset > 560) {
    offset = 0;
  }

  sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider-right").addEventListener("click", function () {
  offset -= 140;
  if (offset < 0) {
    offset = 560;
  }

  sliderLine.style.left = -offset + "px";
});
