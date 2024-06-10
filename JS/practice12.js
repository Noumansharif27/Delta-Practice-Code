let array = [1, 2, 3, 4, 5];

// Function
let mul = function (el) {
  console.log(el);
};

// .forEach(Function)
array.forEach(mul);

// .forEach(Function)
array.forEach(function (el) {
  console.log(el);
});

console.log("using arrow function");
array.forEach((el) => {
  console.log(el);
});

// map(Function)
let student = [
  {
    name: "nouman",
    marks: 1002,
  },
  {
    name: "nomi",
    marks: 528,
  },
  {
    name: "hamza",
    marks: 750,
  },
];

let gpa = student.map((el) => {
  return (el.marks / 1100) * 100;
});

// .filter()
let nums = [1, 2, 3, 4, 5, 6, 7];
let even = nums.filter((num) => {
  num % 2 == 0;
});

console.log(even);

// .every()

let array1 = [2, 4, 6, 8];
let Final = array.every((el) => el % 2 == 0);
console.log(Final);

// .reduce()
let array2 = [1, 2, 3, 4];
let final_value = array2.reduce((res, el) => res + el);
console.log(final_value);

// Practice find max value using reduce()
let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let max = value.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
console.log(max);

//Default parameter
let sum = (a, b = 2) => {
  console.log(a + b);
};
