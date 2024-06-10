let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = "Click me";

let body = document.querySelector("body");
body.append(button);
body.append(input);

input.placeholder = "username";
button.id = "btn";

let btn = document.querySelector("#btn");

let heading = document.createElement("h1");
body.append(heading);
heading.innerText = "DOM Practice";

heading.classList.add("underline");

let para1 = document.createElement("p");
para1.innerHTML = "Apna College <strong>Delta</strong> Practice";
body.append(para1);
