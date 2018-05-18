// This Program confirms wether or not the first argument 
// of the string ends with the second argument
function confirmEnding(str, target){
// Introduces variable secondary set equal to the length 
// of second argument
  var secondary = target.substring(0,target.length);
  console.log(secondary);
// Introduces variable size set equal to the length of secondary
  var size = secondary.length;
  console.log(size);
  console.log(str.length);
// Introduces variable primary to extract size from str
  var primary = str.substr(-size);
  console.log(primary);
// Used and if statement to see if argument two if present
// in argument one
  if (secondary === primary) {
    return true; 
  }
  else if (secondary != primary){
    return false;
  }
}
confirmEnding("Bastian", "n");

