//1. Example of using the foreach method to print each element of an array:
console.log("Welcome");
const fruits = ["apple", "banana", "cherry"];
console.log(fruits);
fruits.forEach((fruit) => console.log(fruit));

//2. Example of using the foreach method to sum all elements of an array
const number = [1, 2, 3, 4, 5];
console.log(number);
number.forEach((numm) => console.log(numm));
let total = 0;
number.forEach((nun) => {
  total += nun;
});
console.log(total);
//3.Example of using the foreach method to create a new array from an existing one:
const doublednumbers = [];
number.forEach((numbers) => {
  doublednumbers.push(numbers * 2);
});
console.log(doublednumbers);
//4. Exampl eof using the foreach method to find the max element of an array:
console.log(number);
console.log("Exces-4");
let max = numberss[0];
number.forEach((numberss) => {
  if (number > max) {
    max = number;
  }
});
console.log(max);
