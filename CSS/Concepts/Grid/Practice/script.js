document.querySelectorAll(".Photo").forEach(function (img) {
  let color = img.getAttribute("data-color");
  img.style.backgroundColor = `${color}`;
});
