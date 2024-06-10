// Function that returns array elements larger than a number.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let num = 5;
function largNo(aar, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i]) {
      console.log(arr[i]);
    }
  }
}

// largNo(arr, num);

// Function to extract unique characters from a string
let str = "abcdabcdefgggh";

function dub_letter(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if (ans.indexOf(currChar) == -1) {
      //if current character is not added, then add it in
      //Otherwise it is a duplicate.
      ans += currChar;
    }
  }
  return ans;
}
console.log(dub_letter(str));

// returns the longest string in an array name as output
let country = ["Australia", "Germany", "United States of America"];

function largerName(array) {
  let ans_ind = 0;
  for (let i = 0; i < array.length; i++) {
    let ans_len = array[ans_ind].length;
    current_len = array[i].length;
    if (current_len > ans_len) {
      ans_ind = i;
    }
  }
  return array[ans_ind];
}

console.log(largerName(country));

// A program to count the vovels in a string
let vovel_string = "hello";

function vovels(str) {
  let ans = 0;
  for (let i = 0; i < vovel_string.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      ans++;
    }
  }
  return ans;
}

console.log(vovels(vovel_string));
