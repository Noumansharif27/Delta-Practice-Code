// this (key-word) is use to get value from the object
let student = {
  name: "shradha",
  phy: 95,
  che: 98.25,
  math: 98.5,
  average() {
    let avg = (this.math + this.phy + this.che) / 3;
    console.log(avg);
  },
};

// try and catch are also key words use to run the program evenif there is any error
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");

try {
  console.log(a);
} catch (err) {
  console.log("a is not defined");
  console.log(err);
}
console.log("hello");
console.log("hello");
console.log("hello");

// arrow => function is used just as a functon assigned to the variable
let eng = 95;
let math = 56.62;
let sci = 95.56;

let average_marks = (eng, math, sci) => {
  console.log(Math.floor((eng + math + sci) / 3));
};

average_marks(eng, math, sci);

// if we have jus to return te value of our parameters then we can use more simple arrow function
let sum = (a, b) => a + b;

// setTimeout is a function use to dellay the process of any process we'll often use it for API's
console.log("Hi there!");

// setTimeout(() => {
//   console.log("Apna College");
// }, 4000);

// console.log("Welcome to");

// // setInterval is same as setTime the difference is that the interval will run infinite times after a period of sec
// setInterval(() => {
//   console.log("What the hack");
// }, 1000);

// this is arrow VS artless(default) function
let student1 = {
  name: "shradhe",
  marks: 95,
  get_name: function () {
    console.log(this); // Find who is his calling statement in this case it's student1
    return this.name;
  },
  get_marks: () => {
    console.log(this); // Find the this of his parent(student1) and gives us his scope in this case Window
    return this.marks;
  },
};

let student2 = {
  name: "shradhe",
  marks: 95,
  get_name: function () {
    setTimeout(function () {
      console.log(this); // Find who is his calling statement in this case it's setTimeout which is a Window function and we will get Window
      return this.name;
    }, 4000);
  },
  get_marks: function () {
    setTimeout(() => {
      console.log(this); // Find the this of his parent(function) and gives us his scope in this case Student2 setTimeout is his calback
      return this.marks;
    }, 1000);
  },
};
