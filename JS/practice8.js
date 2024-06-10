function rollDise() {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
}

rollDise();

function addition(a, b) {
  console.log(a + b);
}

addition(9, 8);
addition(54862595, 757452);
addition(21587, 784512);
addition(794613, 136479);
addition(7899456, 654987);

function average(a, b, c) {
  console.log((a + b + c) / 3);
}

average(1, 1, 1);

function tableOf(n) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

tableOf(5);
