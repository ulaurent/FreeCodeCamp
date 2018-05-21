// This program truncates a string
function truncateString(str, num) {
// Constructed If & Else to slice the phrase and add an elipsis
  if(str.length > num && num >3){
  var cut = str.slice(str.substring(0),num-3);
  console.log(cut);
  var addElipsis =(cut+"...");
  return(addElipsis);
  }
// Else if the num is less than or equalt to two we compensate to add 
// the elipsis to any phrase
  else if (str.length > num && num <= 2){
  var cut2 = str.slice(str.substring(0),num);
  console.log(cut2);
  var addElipsis2 =(cut2+"...");
  return(addElipsis2);
  }
  else{
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

