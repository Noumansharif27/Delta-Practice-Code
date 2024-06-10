let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lists = document.querySelectorAll("li");

div.addEventListener("click", () => {
  console.log("div was clicked");
});

ul.addEventListener("click", (event) => {
  event.stopPropagation(); // use to stop Bubbling evet
  console.log("ul was clicked");
});

for (list of lists) {
  list.addEventListener("click", (event) => {
    event.stopPropagation(); // use to stop Bubbling evet
    console.log("list was clicked");
  });
}
