const assertEqual = function(actual, expected) {};
const tail = function(arr) {
 return tail.slice
  
 
} 
  

// TEST CODE
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!




/*// Import the assertEqual function (if not already imported)
const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  } else {
    return arr.slice(1);
  }
};

// Test Case 1: Check the original array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // The original array should still have 3 elements

// Test Case 2: An array with only one element should yield an empty array for its tail
const oneElementArray = [42];
assertEqual(tail(oneElementArray).length, 0); // The tail of a single-element array is an empty array

// Test Case 3: An empty array should yield an empty array for its tail
const emptyArray = [];
assertEqual(tail(emptyArray).length, 0); // The tail of an empty array is an empty array

// Test Case 4: A regular array should yield its tail without the first element
const regularArray = [1, 2, 3, 4];
assertEqual(tail(regularArray).toString(), [2, 3, 4].toString()); // The tail should be [2, 3, 4]

*/ 