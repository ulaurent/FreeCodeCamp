// This program returns the lowest index at which 
// a value should be inserted into an array
function getIndexToIns(arr, num) {
  //Introduced a variable myArray to hole the num argument
  var myArray = [num];
  // The variable together add th two arrays together
  var together = arr.concat(myArray);
  console.log(together);
  // Utilize the sort method to put the array index in order from least to most
  together.sort(function(a, b){
    return a - b;});
  console.log(together);
  
  // The variable location is utilized to find the index number of the argument num
  var location = together.indexOf(num);
  console.log(location);
  return location;
  }

getIndexToIns([3, 10, 5], 3);


