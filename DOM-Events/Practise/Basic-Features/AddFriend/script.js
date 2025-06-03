const isStatus = document.querySelector("h4");
const addFriend = document.querySelector("#add");
let flag = 0;

addFriend.addEventListener("click", function () {
  if (flag === 0) {
    flag = 1;
    isStatus.textContent = "Friends";
    isStatus.style.color = "green";
    addFriend.textContent = "Remove";
    addFriend.style.backgroundColor = "#dadada";
    addFriend.style.color = "black";
  } else {
    flag = 0;
    isStatus.textContent = "Stranger";
    isStatus.style.color = "red";
    addFriend.textContent = "Add Friend";
    addFriend.style.backgroundColor = "darkcyan";
    addFriend.style.color = "white";
  }
});
