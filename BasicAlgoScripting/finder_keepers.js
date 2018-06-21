function findElement(arr, func) {
  // Filter the array with the parameters of the function
  var filterArr = arr.filter(func); 
  console.log(filterArr);
  return filterArr[0]; //return the first element that returns true, or undefined if no elements return true
}

// test here
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });