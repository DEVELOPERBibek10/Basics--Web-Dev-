const elements = document.querySelectorAll(".elem");

elements.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    elem.childNodes[1].style.opacity = 1;
  });
  elem.addEventListener("mouseleave", function () {
    elem.childNodes[1].style.opacity = 0;
  });
  elem.addEventListener("mousemove", function (event) {
    elem.childNodes[1].style.left = `${event.x}px`;
    elem.childNodes[1].style.top = `${event.y}px`;
  });
});
