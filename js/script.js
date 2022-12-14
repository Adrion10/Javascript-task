// // JavaScript if statment
let iceCrem = "vanilia";
if (iceCrem == !"vanilia") {
  console.log(true);
} else {
  console.log(false);
}

const action = "say Hello";
let msg = "";
switch (action) {
  case "say Hello":
    console.log("Hello");
}

for (let i = 0; i < 100; i++) {
  if (i % 3 == 0) {
    document.write("Fizz" + "<br>");
  } else if (i % 5 == 0) {
    document.write("Buzz" + "</br>");
  } else {
    document.write(i + " ");
  }
}

for (i = 1; i <= 100; i++) {
  if (i % 15 == 0) document.write("FizzBuzz" + "<br> ");
  else if (i % 3 == 0) document.write("Fizz" + " <br>");
  else if (i % 5 == 0) document.write("Buzz" + "<br> ");
  else document.write(i + " ");
}

// task 1
let sum = 0;
for (i = 1; i <= 20; i++) {
  sum += i;
}
document.write(sum);

function findSum(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
  }
  return result;
}

let n = 10;
console.log(`Sum of numebers from 1 to ${n} is ${findSum(n)}`);

function findSumWithFormula(x) {
  return (x * (x + 1)) / 2;
}

let x = 10;
console.log(`Sum of numbers from 1 to ${x} is ${findSumWithFormula(x)}`);

//// task 2

for (y = 1; y <= 5; y++) {
  document.write(`<br> There are ${y} bottels beer on the wall <br>`);
}

///task 7
let result = 0;
let nr = 100;
for (x = 1; x <= 10; x++) {
  result = nr * x;
  document.write(result);
  document.write("<br>");
}

for (i = 0; i < 10; i += 2) console.log(i);

// Task 4
for (i = 1; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(i, "is even");
  } else {
    console.log(i, "is odd");
  }
}

// task 111222333444
let num = 0;
for (x = 0; x <= 11; x++) {
  if (x < 3) {
    num = 1;
    document.write(num);
  } else if (x < 6) {
    num = 2;
    document.write(num);
  } else if (x < 9) {
    num = 3;
    document.write(num);
  } else {
    num = 4;
    document.write(num);
  }

  document.write("<br>");
}

// 012340123401234
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= 4; j++) {
    console.log(j);
  }
}
