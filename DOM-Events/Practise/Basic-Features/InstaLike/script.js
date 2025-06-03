const container = document.querySelector(".container");
const loveIcon = document.querySelector("i");

container.addEventListener("dblclick", function () {
  loveIcon.style.transform = "translate(-50%, -50%) scale(1)";
  loveIcon.style.opacity = 0.9;

  setTimeout(function () {
    loveIcon.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
});
