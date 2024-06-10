// get access to the nested items of nested array
let fruits = [
  ["maong", "apple", "banana"],
  ["orange", "pineaple", "kivi"],
];
for (let i = 0; i < fruits.length; i++) {
  console.log(i);
  for (let j = 0; j < fruits[i].length; j++) {
    console.log(fruits[i][j]);
  }
}

// for-of loop
let cars = ["honda", "mehran", "merceds", "toyota", "royice"];
console.log(cars);
for (car of cars) {
  console.log(car);
}
