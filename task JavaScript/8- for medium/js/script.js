//  for(let i = 0; i < 10; i++){
//    document.write(i, "<br>");
// }

// for(let i = 10; i > 1; i--){
//     document.write(i, "<br>");

// }
// for(let i = 9; i >= 0; i--){
//     document.write(i, "<br>");

// }
// for(let i = 1; i < 10; i+= 2){
//     document.write(i, "<br>");

// }
// for(let i = 2; i < 10; i+= 2){
//     document.write(i, "<br>");

// }
// let c = 6;
// c++
// c+1
// c += 2;
// let v = c
// let v = ++c // v, c = 8
// let v = c++ // v=7 c = 8 para se te shtohet c
// console.log(c)

// // for(let i = 0; i < 10; i+= 2){
// //     document.write("*");
// //     document.write("<br>");

// }
// for(let i = 0; i < 10; i++){
//     for(let x = 0; x < 10; x++){
//         document.write('*');

//     }
//     document.write("<br>");

// }
// for(let i = 1; i < 10; i++){
//     for(let x = 1; x <=i; x++){
//         document.write('*');
//        document.write("<br>");
//     }

// }

// for (var i = 1; i <= 10; i++) {
//   for (var x = 0; x < i; x++) {
//     document.write('*');
//   }
//   document.write("<br>");
// }
// loop1 i = 1
// loop2 0 --> * <br>

/// loop1 i = 2
// loop2 0 --> 2 ** <br>

// loop1 i = 3
// loop2 0 --> 3 *** <br>

// loop1 i = 4
// loop2 0 -->4 **** <br>

// for (var i = 10; i >= 1; i--) {
//     for (var x = i; x > 0; x--) {
//       document.write('*');
//     }
//     document.write("<br>");
//   }

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// for (var i = 1; i <= 10; i++) {
// for (var y = 10 - i; y > 0; y--)
//   document.write('&nbsp; ')
//   for (var x = 1; x <= i; x++) {

//     document.write('*');
//   }
//   document.write("<br>");
// }

for (let i = 0; i < 10; i++) {
  for (let x = 10 - i; x > 1; x--) {
    document.write("-");
  }
  for (let x = 0; x <= i; x++) {
    document.write("*");
  }
  document.write("<br>");
}
