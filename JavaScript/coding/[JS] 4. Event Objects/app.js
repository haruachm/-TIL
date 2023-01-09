const button = document.querySelector("button");
button.addEventListener("click", function (e) {
  console.log(e);
});

// const input = document.querySelector("input");
// input.addEventListener("keydown", function (e) {
//   console.log(e.key);
//   console.log(e.code);
// });

window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("위쪽키");
      break;
    case "ArrowLeft":
      console.log("왼쪽키");
      break;
    case "ArrowRight":
      console.log("오른쪽키");
      break;
    case "ArrowDown":
      console.log("아래키");
      break;
    default:
      console.log("무시");
  }
});
