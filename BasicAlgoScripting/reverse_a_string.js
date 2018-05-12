// This program reverses a string

function reverseString(str) {
  //Turn string into array using split, then rverse the array, then rejoins array 
  // into a string
  return str.split('').reverse().join('');
}
  //Send reverse string the argument of "Ben"
reverseString("Ben");

