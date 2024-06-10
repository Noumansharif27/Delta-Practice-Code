let goodStr = "apple";

// finds wether the string is good or not
if (goodStr[0] === "a" && goodStr.length > 3) {
  console.log("That's a good string.");
} else {
  console.log("I don't think thats a good string.");
}

// find the output of the following
let num = 12;
if (num % 3 === 0 && (num + 1 === 15 || num - 1 === 11)) {
  console.log("Safe");
} else {
  console.assert;
  console.log("Unsafe");
}
