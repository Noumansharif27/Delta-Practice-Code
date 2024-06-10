let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let heading = document.querySelector("h3");
  let randomColor = getRandomColor();
  heading.innerText = randomColor;

  let div = document.querySelector("#div");
  div.style.backgroundColor = randomColor;
});

let getRandomColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  color = `rgb(${red}, ${green}, ${blue})`;
  return color;
};
