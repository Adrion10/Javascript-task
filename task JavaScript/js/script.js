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
    document.write("Hello");
}

// for (let i = 0; i < 100; i++) {
//   if (i % 3 == 0) {
//     document.write("Fizz" + "<br>");
//   } else if (i % 5 == 0) {
//     document.write("Buzz" + "</br>");
//   } else {
//     document.write(i + " ");
//   }
// }
function FizzBuzz() {
  for (i = 1; i <= 100; i++) {
    if (i % 15 == 0) document.write("FizzBuzz" + "<br> ");
    else if (i % 3 == 0) document.write("Fizz" + " <br>");
    else if (i % 5 == 0) document.write("Buzz" + "<br> ");
    else document.write(i + " ");
  }
}
FizzBuzz();

for (var i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}
// task 1
let sum = 0;
for (i = 1; i <= 20; i++) {
  sum += i;
}
document.write(`"Sum of number till 20 " = ${sum}`);
document.write("<br>");
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
document.write(`Sum of numbers from 1 to ${x} is ${findSumWithFormula(x)}`);
document.write("<br> task 2");

//// task 2

for (y = 1; y <= 5; y++) {
  document.write(`<br> There are ${y} bottels beer on the wall <br>`);
}

///task 7
document.write("<br>");
document.write(" taxs7 <br>");
function FindMultipl() {
  let result = 0;
  let nr = 100;
  for (x = 1; x <= 10; x++) {
    result = nr * x;
    document.write(result);
    document.write("<br>");
  }
}
FindMultipl();
document.write("<br>");

for (i = 0; i < 10; i += 2) console.log(i);
document.write(i);

// Task 4
document.write("<br>");
for (i = 1; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(i, ` + "is even "`);
    document.write(i, "is even");
  } else {
    console.log(i, "is odd");
    document.write(i, "is odd");
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
    document.write(j);
  }
}

//hakerrank Task
let Myarr = [
  "-9 -9 -9 1 1 1",
  "0 -9 0 4 3 2",
  "-9 -9 -9 1 2 3",
  "0 0 8 6 6 0",
  "0 0 0 -2 0 0",
  "0 0 1 2 4 0",
];
// function hourglassSum(arr) {
//   let maxSum = "";
//   for (let i = 0; i < arr.lenggth - 2; i++) {
//     for (let j = 0; j < arr.lemgth - 2; j++) {
//       let maxSum = ''
//     for (let step1 = 0; step1 < arr.length-2; step1++){
//         for (let step2 = 0; step2 < arr.length-2; step2++){
//             const currentSum = arr[step1][step2] + arr[step1][step2+1]
//          + arr[step1][step2+2] + arr[step1+1][step2+1]
//          + arr[step1+2][step2] + arr[step1+2][step2+1]
//          + arr[step1+2][step2+2]

//             if(currentSum <= 0){
//                const temp = currentSum
//                if (typeof maxSum == 'string' ){
//                    maxSum = temp
//                } else if(temp == 0 && maxSum <= 0){
//                    maxSum = temp
//                }
//                 else if(temp > maxSum){
//                    maxSum = temp
//                }
//             } else if(currentSum > maxSum){
//                 maxSum = currentSum
//             }
//         }
//     }
//     return maxSum
// }
// document.write(hourglassSum(Myarr));

// let myArray = [
//   "-9 -9 -9 1 1 1",
//   "0 -9 0 4 3 2",
//   "-9 -9 -9 1 2 3",
//   "0 0 8 6 6 0",
//   "0 0 0 -2 0 0",
//   "0 0 1 2 4 0",
// ];
// function hourGlassSum(arr, sum = 0) {
//   let hourGlass = function (myArray, y, x, myHour = [], mySum = 0) {
//     myHour.push(
//       [y, x],
//       [y, x + 1],
//       [y, x + 2],
//       [y + 1, x + 1],
//       [y + 2, x],
//       [y + 2, x + 1],
//       [y + 2, x + 2]
//     );
//     myHour.forEach(function (el) {
//       el[0] in myArray && el[1] in myArray[el[0]]
//         ? (mySum += +myArray[el[0]][el[1]])
//         : (mySum = 0);
//     });
//     return mySum;
//   };
//   arr.forEach((el, i) => (arr[i] = el.split(" ")));
//   arr.forEach((el, i) =>
//     arr[i].forEach((el, k) => (sum = sum + hourGlass(arr, i, k)))
//   );
//   return sum;
// }
// console.log(hourGlassSum(myArray));

var arr = [5, 4, 1, 2, 3, 4, 5];
function rotLeft(a, d) {
  var arr = [];
  for (var i = 0; i < a.length; i++) {
    arr.push(a[i]);
  }
  for (var j = 1; j <= d; j++) {
    arr.shift(arr.push(arr[0]));
  }
  return arr;
}
console.log(rotLeft(arr));

function rotLeft(a, d) {
  var arr = [];
  var l = 0;
  for (let i = 0; i < a.length; i++) {
    if (i >= d) {
      arr[i - d] = a[i];
    } else {
      arr[a.length - d + l] = a[i];
      l = i + 1;
    }
  }
  return arr;
}

// function minimumBribes(q) {
//   let num = 0;
//   let chaotic = false;
//   for (let i = q.length - 1; i >= 0; i--) {
//     if (q[i] - i > 3) chaotic = true;
//     for (let j = q[i] - 2; j < i; j++) {
//       if (q[j] > q[i]) num++;
//     }
//   }
//   if (chaotic) console.log("Too chaotic");
//   else console.log(num);
// }
let q = [1, 2, 3, 4, 5, 6, 7, 8];
function minimumBribes(q) {
  let num = 0;
  let chaotic = false;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) chaotic = true;
    for (let j = q[i] - 2; j < i; j++) {
      if (q[j] > q[i]) num++;
    }
  }
  if (chaotic) console.log("Too chaotic");
  else console.log(num);
}

//Task MinimumSwaps

arr = [(7, 3, 2, 4, 5, 6)];

function minimumSwaps(arr) {
  let swaps = 0;

  const tmp = {};
  arr.forEach((v, i) => (tmp[v] = i));

  arr.forEach((v, i) => {
    // because they are consecutives, I can see if the number is where it belongs
    if (arr[i] !== i + 1) {
      swaps += 1;
      const t = arr[i];
      arr[i] = i + 1;
      arr[tmp[i + 1]] = t;

      // Switch also the tmp array, no need to change i+1 as it's already good now
      tmp[t] = tmp[i + 1];
    }
  });

  return swaps;
}

function arrayManipulation(n, queries) {
  // Alternative Arrya creation
  // const arr = '0'.repeat(n).split('').map((e) => parseInt(e));
  let zeroArr = "0"
    .repeat(n)
    .split("")
    .map((e) => parseInt(e));
  for (let j = 0; j < queries.length; j++) {
    let startIndex = queries[j][0];
    let endIndex = queries[j][1];
    let numberToAdd = queries[j][2];
    for (let i = 0; i < n; i++) {
      let index = i + 1;
      if (index >= startIndex && index <= endIndex) {
        zeroArr[i] += numberToAdd;
      }
    }
  }
  return Math.max(...zeroArr);
}

//1 provim
function getOpenApplications(commands) {
  let openApps = [];
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "open") {
      openApps.push(commands[i]);
    }
  }
  return openApps;
  // return commands.filter((e) => e!== "open");
}
function getMinimumChanges() {
  let minChanges = [];
}
let words = ["duel", "speed", "duel", "scars"];
let queries = ["duel", "speed"];
function getSearchResults(words, queries) {
  let results = [];
  for (let i = 0; i < queries.length; i++) {
    let startIndex = queries[i][0];
    let endIndex = queries[i][1];
    let numberToAdd = queries[i][2];
  }
  for (let j = 0; j < words.length; j++) {
    let index = j + 1;
  }
  if (index >= startIndex && index <= endIndex) {
    results.push(numberToAdd);
  }

  return results;
}

function getMaximumXor(s, t) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i] ^ t[i]);
  }
  return arr;

  // return s.map((e, i) => e ^ t[i]);
}
