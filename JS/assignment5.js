// Fnction to accept an array of number and return the average of those no
let array = [1, 2, 3, 4, 5, 6];
const array_average = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

// Function to take an argument an see if it is even or not
let even = 25;
const is_even = (even) => {
  if (even % 2 == 0) {
    console.log("It is an even");
  } else if (!(even % 2 == 0)) {
    console.log("It is an odd no");
  } else {
    console.log("It is not a number.");
  }
};

// Define the following's ouutput
const object = {
  message: "Hello,World!",
  log_message() {
    console.log(this.message);
    console.log(this);
  },        
};

setTimeout(object.log_message, 1000);

// Define the following's output
let length = 4;
function callback() {
  console.log(this.length);
}
const object1 = {
  length: 5,
  method(callback) {
    callback();
  },
};
object1.method(callback, 1, 2);
