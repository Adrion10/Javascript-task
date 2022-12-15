//// Task 1
function greetings(parametersVariables) {
  console.log(parametersVariables);
  console.log("Hello Lace");
}

greetings("Hello World");

//// Task 2 Data Type
const firstString = "HakerRank";
const secondString = " is the best place to learn and paractis code ";
const firstIntiger = 4;
const secondIntiger = 2;
const firstDecimal = 4.5;
const secondDecimal = 3.34;

console.log(firstIntiger + Number(secondIntiger));
console.log(firstDecimal + Number(secondDecimal));
console.log(firstString + secondString);

// Task 3 Find all duplictes in an Array?
const findDuplicates = (arr) => {
  let sorted_arr = arr.slice().sort(); // You can define the comparing function here.
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
};

let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
console.log(
  `The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`
);

// Task 4 isValidSuduku?
var isValidSuduku = function (board) {
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board.length; j++) {
      const cell = board[i][j];
      if (cell === ".") continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board.length; j++) {
      const cell = board[j][i];
      if (cell === ".") continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          const cell = board[3 * i + k][3 * j + l];
          if (cell === ".") continue;
          if (set.has(cell)) return false;
          set.add(cell);
        }
      }
    }
  }
  return true;
};
