// let = 0;
let arr = [-2, -5, -720, -1, -20, -9, -81];
// Array index Start from 0 , ketu jane 6

console.log(arr[4]);
console.log(arr.length);

// for (let i = 0; i < i; i++) {
//   document.write(arr[i], "<br>");
// }
// let sum = 0
// for (let i = 0; i< arr.length; i++){
//    sum += arr[i]
// }
// document.write('the sum number is:  '  + sum )

// let m = 1
// for (let i = 0; i< arr.length; i++){
//     m = m * arr[i] //m*= arr[i]
// }
// document.write('the multiple number is:  ' + m )

// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// document.write("the largest number is:  " + max);

// // task 5
// let sum = 0;
// for (let i = 1; )

let total = 0;
for (i = 1; i <= 10; i++) {
  let num = Number(prompt(`Enter Number ${i}`));
  if (isNaN(num)) {
    num = 0;
  }
  total += num;
}
document.write(`this is the total: ${total} <br>`);
document.write(`this is the avarage :${total / 10} `);

// let x1 = "1.3"
//  let x2 = "1.3"
// let x3 = Number(x1) + Number(x2);
// console.log(x3)
