// let heading = document.querySelector("h1");

// function colorChange(color, delay, setColorChange) {
//   setTimeout(() => {
//     heading.style.color = color;
//     setColorChange();
//   }, delay);
// }
// colorChange("red", 1000, () => {
//   colorChange("green", 1000, () => {
//     colorChange("blue", 1000, () => {
//       colorChange("yellow", 1000, () => {
//         colorChange("purple", 1000);
//       });
//     });
//   });
// });

// This is called Callback-hell where the code became much error prone to deal with this we use Promise

// function storeToDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// storeToDB(
//   "apna college",
//   () => {
//     console.log("success: data has been stored.");
//     storeToDB(
//       "nouman",
//       () => {
//         console.log("success2: data2 has been stored.");
//         storeToDB(
//           "shradha",
//           () => {
//             console.log("success3: data3 has been stored.");
//           },
//           () => {
//             console.log("failure3: poor network connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: poor network connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure: poor network connection");
//   }
// );

// function saveToDB(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success: data has been stored."); //result
//     } else {
//       reject("failure: poor connection."); //error
//     }
//   });
// }

// saveToDB("apna college")
//   .then((result) => {
//     console.log("data was solved: promise resolved.");
//     console.log(`promised result: ${result}`);

//     return saveToDB("hello, world");
//   })
//   .then((result) => {
//     console.log("data2 was saved: promise resolve.");
//     console.log(`promised result: ${result}`);

//     return saveToDB("nouman");
//   })
//   .then((result) => {
//     console.log("data3 was saved: promise resolved.");
//     console.log(`promised result: ${result}`);
//   })
//   .catch((error) => {
//     console.log("failure poor connection: promise rejected.");
//     console.log(`error result: ${error}`);
//   });

let heading = document.querySelector("h1");

function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      heading.style.color = color;
      resolve("color was updated!");
    }, delay);
  });
}
colorChange("red", 1000)
  .then(() => {
    console.log("red color was updated.");
    return colorChange("orange", 1000);
  })
  .then(() => {
    console.log("orange color was updated.");
    return colorChange("green", 1000);
  })
  .then(() => {
    console.log("green color was updated.");
    return colorChange("yellow", 1000);
  })
  .then(() => {
    console.log("yellow color was updated.");
    return colorChange("blue", 1000);
  })
  .then(() => {
    console.log("blue color was updated.");
  });
