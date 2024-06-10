function sumFu(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// sumFu(no);

let str = ["hello", "hi", "bye", "!"];
function strMerge(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}

function greetUp(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

let func = function () {
  console.log("hello");
};

greetUp(func, 50);
