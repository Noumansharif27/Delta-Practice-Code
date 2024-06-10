// async function greet() {
//   return "Hello!";
// }

// greet()
//   .then((result) => {
//     console.log("changes applied successfully.");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(`Random error ${error}`);
//   });

// let heading = document.querySelector("h1");
// function colorChange(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       heading.style.color = color;
//       console.log(`${color} has ben updated.`);
//       resolve("color has been changed");
//     }, delay);
//   });
// }

// async function tocolorChange() {
//   await colorChange("red", 1000);
//   await colorChange("orange", 1000);
//   await colorChange("green", 1000);
//   await colorChange("yellow", 1000);
//   await colorChange("purple", 1000);
//   colorChange("blue", 1000);
// }

// tocolorChange();

// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(`data1 = ${data.fact}`);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log(`data2 = ${data2.fact}`);
//   })
//   .catch((err) => {
//     console.log("ERROR - ", err);
//   });

let url = "https://catfact.ninja/fact";

async function getRes() {
  try {
    let res = await fetch(url);
    let data = await res.json();

    console.log(data.fact);
  } catch (e) {
    console.log(`ERROR - ${e}`);
  }
}
