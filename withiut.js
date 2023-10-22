const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log ("Assertion Passed ✅✅✅");
  } else {
    console.log ("Assertion Failed 🛑🛑🛑");
  }
  
  }; 
  const eqArrays = function(arr, arr1){
    if (arr.length !== arr1.length) return false
   
    for (let i = 0; i < arr.length; i++){
      if (arr[i] !== arr1[i]){
        return false

      }
    } 
    return true;
  }

  const without = function (source, itemsToRemove){
    const arr = []
    for (const element of source){
      if (!itemsToRemove.includes(element) ){
        arr.push(element);
       }
    }   
    
    return arr;

  }
  

  console.log (without([1, 2, 3], [1]) ) // => [2, 3]
  console.log (without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"] // 

  console.log (without([1, 2, 3], [1, 3]) )

    