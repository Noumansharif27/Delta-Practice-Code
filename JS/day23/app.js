// // onclick()
// let btn = document.querySelector("button");
// btn.onclick = () => {
//   console.log("the button was clicked.");
// };

// // onmouseenter()
// let btns = document.querySelectorAll("button");
// for (btn of btns) {
//   btn.onmouseenter = () => {
//     console.log("What's up Nigga!");
//   };

//   // addEventListner()
//   btn.addEventListener("click", () => {
//     alert("You know what Nigga, You kinda cute Nigga");
//   });
// }

// // keybosrd addEventListener()
// let btn = document.querySelector("button");
// btn.addEventListener("click", (event) => {
//   console.log("keyboard addEventListener()");
//   console.log(event);
// });

// // track your character
// let ctrl = document.querySelector("#control");
// ctrl.addEventListener("keydown", (event) => {
//   if (event.code == "ArrowUp") {
//     console.log("character moves forward.");
//   } else if (event.code == "ArrowDown") {
//     console.log("character moves backword.");
//   } else if (event.code == "ArrowLeft") {
//     console.log("character moves left.");
//   } else if (event.code == "ArrowRight") {
//     console.log("character moves right.");
//   }
// });

let form = document.querySelector("form");
let user = document.querySelector("#user");
let password = document.querySelector("#pswd");

// "change" will display the changes after going to the next element or submitting the form
user.addEventListener("change", () => {
  // console.log("change added");
  // console.dir(user.value); // here the value is the text that was entered by the client
});

// "input" will display the each change before enternig new thing in the bellow case it will type each character the user had entered
pswd.addEventListener("input", () => {
  // console.log("change added");
  // console.dir(user.value); // here the value is the text that was entered by the client
});

// Generate an allert of user name and their password on submting the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert(`Hi ${user.value}! your password is ${pswd.value}`);
});
