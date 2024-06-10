let url = "https://icanhazdadjoke.com/";

async function getJokes(data) {
  try {
    const confrig = { headers: { accept: "application/json" } };
    let result = await axios.get(url, confrig);
    console.log(result.data);
  } catch (e) {
    console.log(`error - ${e}`);
    return "No jokes found";
  }
}

// let button = document.querySelector("button");
// let url = "https://dog.ceo/api/breeds/image/random";

// button.addEventListener("click", async () => {
//   let link = await getImage();
//   //   console.log(link);

//   let img = document.querySelector("#result");
//   img.setAttribute("src", link);
// });

// async function getImage(data) {
//   try {
//     let result = await axios.get(url);
//     return result.data.message;
//   } catch (e) {
//     console.log(`error - ${e}`);
//     return "No image found";
//   }
// }

// button.addEventListener("click", async () => {
//   let fact = await getFacts();
//   console.log(fact);

//   let p = document.querySelector("#result");
//   p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";
// async function getFacts(data) {
//   try {
//     let result = await axios.get(url);
//     return result.data.fact;
//   } catch (e) {
//     console.log(`error - ${e}`);
//     return "No facts found";
//   }
// }
