let userInp = prompt("Enter a number.");
let randomNo = Math.floor(Math.random() * userInp) + 1;
console.log(randomNo);

while (true) {
  if (guessNo == "quit") {
    console.group("Game Quiting.");
    break;
  }

  if (guessNo == randomNo) {
    console.log("Congratulations yo guess the right.", randomNo);
    break;
  } else if (guessNo < randomNo) {
    guessNo = prompt("You should try large no.try again");
  } else {
    guessNo = prompt("You should try small no.try again");
  }
}
