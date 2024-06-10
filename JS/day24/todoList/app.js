let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  let item = document.createElement("li");
  item.innerText = input.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  input.value = "";
});

ul.addEventListener("click", (event) => {
  let btns = event.target.nodeName;
  let listItem = event.target.parentElement;
  listItem.remove();
});

// let delBtns = document.querySelectorAll(".delete");
// delBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     let parent = btn.parentElement;
//     console.log(parent);
//     parent.remove();
//   });
// });
