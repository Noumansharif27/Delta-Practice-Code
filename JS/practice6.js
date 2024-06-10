// // Print odd numbers from 1 to 15
// console.log("Odd numbers");
// for (let i = 1; i <= 15; i += 2) {
//   console.log(i);
// }

// // Print even numbers from 2 to 10
// console.log("Even numbers");
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// // print multiplication table of 5
// console.log("5th table.");
// for (let i = 1; i <= 10; i++) {
//   console.log(`5 * ${i} = ${i * 5}`);
// }

// // Print table of user input number
// let input = prompt("Enter a number: ");
// for (let i = 1; i <= 10; i++) {
//   console.log(`${input} * ${i} = ${i * input}`);
// }

// // print evevn numbers using while loop
// let i = 0;
// while (i <= 20) {
//   console.log(i);
//   i += 2;
// }

// // favourite movie game
// const favMovie = "Avatar";
// let n = prompt("Enter my favourite movie name: ");
// while (n != favMovie || n != "quit") {
//   console.log("that's right yu win!");
// }

// arrays in loop
let fruits = ["mango", "banana", "orange", "pineaple", "kivi"];
for (i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

console.log("reverse");
for (i = fruits.length - 1; i >= 0; i--) {
  console.log(i, fruits[i]);
}
