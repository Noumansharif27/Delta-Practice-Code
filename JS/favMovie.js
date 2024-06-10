let favMovie = "avatar";
let guess = prompt("Guess my favourite movie");

while (guess != favMovie && guess != "quit") {
  guess = prompt("wrong guess try again");
}
if (guess === "quit") {
  console.log("You quit.");
} else {
  console.log("Congrats! you guess it right");
}
