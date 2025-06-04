const storyDatas = [
  {
    dp: "https://imgs.search.brave.com/nrBPzZRIpnNnUfmQXXNvXnZtgoYfMaqT_J9v0GnRtz4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQva2Fr/YXNoaS1zaGFyaW5n/YW4tcWJuZzZtdTdn/a2U2OWxvNS5qcGc",
    story:
      "https://images.unsplash.com/photo-1527511742022-12bbbc722149?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://imgs.search.brave.com/mfUo-BJXxl51frEYYgx6GCXITmI6aiPiox0n7Je1oQg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbWFk/YXJhLXVjaGloYS1y/ZWQtbW9vbi1uYXJ1/dG8tbW9iaWxlLTRr/LW8yanBiMmh2MXQ3/dnB6eDUuanBn",
    story:
      "https://images.unsplash.com/photo-1748546523330-70ca0d3dff7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://imgs.search.brave.com/ElD7LJpoJwnJtRIPqJ12scBZMV2IXQ-uupOHud_d3n0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyMDAx/ODA2LmpwZw",
    story:
      "https://plus.unsplash.com/premium_photo-1661962754715-d081d9ec53a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udW1lbnRzfGVufDB8fDB8fHww",
  },
  {
    dp: "https://imgs.search.brave.com/mUw5yGr38O0vphyasT4FOjkk21E-MtSJrzyTns2YPxw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzk1/MTM3OC5qcGc",
    story:
      "https://plus.unsplash.com/premium_photo-1678370892409-04168b7f05d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9udW1lbnRzfGVufDB8fDB8fHww",
  },
  {
    dp: "https://imgs.search.brave.com/Ixojyb6kWmEM1WbNoKagSvMHAELknlLkF8L0rsDQE04/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8xNzMv/NjgvSEQtd2FsbHBh/cGVyLW5hcnV0by1q/aXJhaXlhLXBvcnRy/YWl0LWNoYXJhY3Rl/cnMtcHJvdGFnb25p/c3QtamFwYW5lc2Ut/bWFuZ2EtYXJ0LW5h/cnV0by1tYW5nYS10/aHVtYm5haWwuanBn",
    story:
      "https://images.unsplash.com/photo-1618322704781-7d0bba9280b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9udW1lbnRzfGVufDB8fDB8fHww",
  },
];

const stories = document.querySelector(".stories");
const imgIds = [];
function recStory(storyData) {
  let { dp } = storyData;
  let div = document.createElement("div");
  div.setAttribute("class", "story");
  let img = document.createElement("img");
  let imgAttr = {
    id: Math.random(),
    src: `${dp}`,
  };
  for (let key in imgAttr) {
    img.setAttribute(key, imgAttr[key]);
  }

  imgIds.push(img.id);

  div.appendChild(img);
  stories.appendChild(div);
}

storyDatas.forEach(function (data, index) {
  recStory(data);
});

let displayStories = document.querySelector(".full-screen");

stories.addEventListener("click", function (event) {
  for (let [index, id] of imgIds.entries()) {
    if (event.target.id === id) {
      document.querySelector(".full-screen").style.display = "block";
      document.querySelector(
        ".full-screen"
      ).style.backgroundImage = `url(${storyDatas[index].story})`;
      setTimeout(function () {
        document.querySelector(".full-screen").style.display = "none";
      }, 3000);
    }
  }
});
