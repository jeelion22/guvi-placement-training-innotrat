// split method is a string method gets two optinal arguments and
// returns an array containing
// substrings of a given string
// 1. seprator => pattern 2. limit => no. of substrings to be added to the array

let name = "jevaeva";

console.log(name.split(""));
console.log(name.split(" "));
console.log(name.split(","));

// Array method - slice() get two arguments
// 1. start index 2. stop index
// if these are not given, whole array will be returned

var arr = [1, 2, 3, 4, 5, 6];

console.log(arr.slice()); // [1, 2, 3, 4, 5, 6 ]

console.log(arr.slice(1)); // [2, 3, 4, 5, 6]

console.log(arr.slice(1, 2)); // [2] the item at end index is exclusive

arr = ["fire", "water", "ice", "steam", "sand", "grass"];

console.log(arr.slice(0, 4)); // ["fire", "water", "ice", "steam"]

// arr.slice(, 3) It does not work

console.log(arr.slice(3)); // Here 3 is the start index
// ["steam", "sand", "grass"]

console.log(arr.slice(arr.length - 1)); // ["grass"]

// negative number indexing gives access to elements from
// last and it starts from -1

console.log(arr.slice(-1)); // ["grass"] returns an array containing last element

console.log(arr.slice(-2)); //  ["sand", "grass"]

console.log(arr.slice(-5, -2)); // [ 'water', 'ice', 'steam' ]

console.log(arr.slice(-5, 2)); // [ 'water']
