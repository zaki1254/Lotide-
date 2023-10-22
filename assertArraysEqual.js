const eqArrays = function(arr, arr1){
  if (arr.length !== arr1.length) return false
 
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== arr1[i]){
      return false

    }
  } 
  return true
} 
// TEST CODE

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false