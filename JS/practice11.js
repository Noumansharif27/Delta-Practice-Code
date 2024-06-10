// A function to return square of a using arrow function
let square = (a) => a ** a;

// write a function to print Hello! World 5 time in interval of 2s then stop
let hello_world = setInterval(() => {
  console.log("Hello! World");
}, 2000);
setTimeout(() => {
  clearInterval(hello_world);
}, 10000);
