// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 300; i++) {
  const poketmonDiv = document.createElement("div");
  poketmonDiv.classList.add("poketmon");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const poketmonImg = document.createElement("img");
  poketmonImg.src = `${baseURL}${i}.png`;

  poketmonDiv.appendChild(poketmonImg);
  poketmonDiv.appendChild(label);
  container.appendChild(poketmonDiv);
}
