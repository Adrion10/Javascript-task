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
