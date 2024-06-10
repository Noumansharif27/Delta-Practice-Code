// mouseout is applied after the mouse pointer exists form the selected element
let div = document.getElementById("div");
function mouseExist() {
  div.style.backgroundColor = "blue";
}

div.addEventListener("mouseout", mouseExist);

// "keypress" works only on inputs it works when any keyboard charachter is pressed
let user = document.querySelector("#user");
let para = document.querySelector("#para");

user.addEventListener("keypress", keyPressed);

function keyPressed(e) {
  para.textContent += `${e.code}`;
}

// "scroll" this proprerty is trigered when document view if we set it to it or element conten if we set to it is srolled
let text = document.querySelector("#scrollText");

text.addEventListener("scroll", () => {
  console.group("what's up nigga.");
});

let img = document.querySelector("img");
img.addEventListener("load", () => {
  console.log("Image is sucessfully loaded");
});

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.style.backgroundColor = "green";
});

let userName = document.querySelector("#q3");
let h2 = document.querySelector("h2");

userName.addEventListener("input", () => {
  h2.textContent = userName.value;
});
