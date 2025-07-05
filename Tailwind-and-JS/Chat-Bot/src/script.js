const messageInput = document.querySelector("#message-input");
const sendBtn = document.querySelector("#send");

messageInput.addEventListener("input", function () {
  if (messageInput.value.trim().length === 0) {
    sendBtn.classList.replace("block", "hidden");
  } else {
    sendBtn.classList.replace("block", "hidden");
  }
});

sendBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(messageInput.value);
});
