const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const allButton = document.querySelectorAll("button");

for (let button of allButton) {
  button.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}
