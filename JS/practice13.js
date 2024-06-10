// Create an function to find whether the gven array's elements are multiple of 10 or not
let array = [50, 20, 50, 40, 60, 5];
let bool = array.every((el) => {
  el % 10 == 0;
});

// find the mnimum noumber of an array using function
function get_mini(array) {
  let minimun = array.reduce((mini, el) => {
    if (mini < el) {
      return mini;
    } else {
      return el;
    }
  });
  return minimun;
}
