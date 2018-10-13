const lib= require("./addNumbersOfArrayLib.js");
const addNumbers = lib.addNumbers;

const main = function() {
  let inputNumbers = process.argv[2];
  let numbers = inputNumbers.split("");
  console.log(addNumbers(numbers));
  return;
}

main();
