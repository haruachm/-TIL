const colorBtn = document.querySelector("button");
const h1 = document.querySelector("h1");

colorBtn.addEventListener("click", () => {
  const newColor = randomColor();
  document.querySelector(
    "body"
  ).style.backgroundColor = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
  h1.innerText = newColor;

  if (newColor[0] + newColor[1] + newColor[2] < 255) {
    console.log("dd");
    h1.style.color = "rgb(255, 255, 255)";
  }
});

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return [r, g, b];
};
