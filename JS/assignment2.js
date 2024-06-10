// JS program to delete all occurrences of element 'num' in a given array.
let array0 = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (let i = 0; i < array0.length; i++) {
  if (array0[i] == num) {
    array0.splice(i, 1);
  }
}
console.log(array0);

// // JS program to find the no of digits in a number.
// let numberInput = prompt("Enter a number.");
// console.log(numberInput.length);

// JS program to find the sum of digits in a number.
let inputNo = prompt("Enter a number.");
let sum = 0;
let copy = inputNo;
while (copy > 0) {
  let digit = copy % 10;
  sum += digit;
  copy = Math.floor(copy / 10);
}
console.log(sum);
