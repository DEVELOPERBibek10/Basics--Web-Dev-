const container = document.querySelector(".main");
const crsr = document.querySelector(".cursor");

container.addEventListener("mousemove", function (event) {
  crsr.style.left = `${event.x}px`;
  crsr.style.top = `${event.y}px`;
});
