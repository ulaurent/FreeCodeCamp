// This program repeats a string said second argument times

function repeatStringNumTimes (str,times){

// Constructed if and else statement to repeat first 
// argument string said second argument times if times 
// is greater than zero, else return an empty string

  if(times > 0){
    var letsRepeat = str.repeat(times);
    return (letsRepeat);
  }
  else {
    return ("");
  }
}

repeatStringNumTimes("*", -1);

