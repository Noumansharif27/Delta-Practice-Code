let para1 = document.createElement("p");
para1.textContent = "Hi, I am red!";
let body = document.querySelector("body");
body.append(para1);

para1.classList.add("red");

let h3 = document.createElement("h3");
h3.textContent = "Hi, I am Blue!";
body.append(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h2 = document.createElement("h2");
let para2 = document.createElement("p");
div.append(h2);
div.append(para2);

h2.innerText = "Hi, I am in a div";
para2.innerText = "ME TOO!";

body.append(div);

div.classList.add("box");
