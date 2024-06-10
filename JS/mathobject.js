// random is ud=sed to generate random numbers from 0 - 1(here 1 is exclusive)
let step1 = Math.random();
console.log(step1);

let step2 = step1 * 10;
console.log(step2);

// floor() s used to wrap the decimal into one digit to his (least nearest) value
let step3 = Math.floor(step2);
console.log(step3);

let step4 = step3 + 1;
console.log(step4);

// we can also write this lite that
console.log("shorthand");
let shorthand = Math.floor(Math.random() * 10) + 1;
console.log(shorthand);
