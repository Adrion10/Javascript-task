///// call Stac (LIFO)

// syncronous programimin
function f1() {}
function f2() {}
function f3() {
  f1();
}

// f1()
f2();
f3();

function functionName(parametrats) {}
function celsiusToFahrenheit(celsius) {
  return (celsius / 5) * 9 + 32;
}
let msg = celsiusToFahrenheit(32);
console.log(msg);

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}
let msg2 = fahrenheitToCelsius(32);
console.log(msg2);

//The Puppy Age Calculator
let conversion = 100;
function calculateDogAge(yourPuppyAge) {
  return yourPuppyAge * 7;
}
let age = calculateDogAge(1);
console.log(`Your doggie is ${age} years old in dog years!`);
age = calculateDogAge(5);
console.log(`Your doggie is ${age} years old in dog years!`);
age = calculateDogAge(7);
console.log(`Your doggie is ${age} years old in dog years!`);
