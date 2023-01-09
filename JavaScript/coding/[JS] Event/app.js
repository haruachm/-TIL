const newBtn = document.querySelector("#newBtn");

newBtn.onclick = function () {
  console.log("날 클릭했구나");
};

function talk() {
  console.log("그만 눌러");
}

thirdBtn.onmouseenter = talk;

document.querySelector("h1").onclick = function () {
  alert("날 누르지마");
};

const fourthBtn = document.querySelector("#fourthBtn");
fourthBtn.addEventListener("click", () => alert("클릭되었습니다"));

const fifthBtn = document.querySelector("#fifthBtn");
fifthBtn.addEventListener("click", () => console.log("첫번째 이벤트"), {
  once: true,
});
fifthBtn.addEventListener("click", () => console.log("두번째 이벤트"));
