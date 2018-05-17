//This Program the largest number from multiple sub-arrays
function largestOfFour(arr) {
  
// Introduce variable 'store where final 
// values will be stored
var store = [];
  
// Constructed a forloop in order to iterate through the array
for(var i=0;i<arr.length; i++){
  
// Set variable highNum equal to the first index of 
// subjected subarray
var highNum = arr[i][0];
  
// Constructed another for loop to iterate through each subarray 
  for(var z=1;z<arr[i].length;z++){
  
// Applied an if statement that will extract the largest number 
// from each subarray
      if (arr[i][z]>highNum){
          highNum = arr[i][z];
  }
}
// Stores the highest number from each subarray into one array
      store[i] = highNum;
}
return store;
}

