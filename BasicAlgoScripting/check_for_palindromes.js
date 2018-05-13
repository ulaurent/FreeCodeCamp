// Program checks for Palindromes

function palindrome(words){
  // Introduces a variable cool that removes all non-alphanumeric characters and     // makes everything lowercase within the string
  
  var cool = words.replace(/[\W_]/g,'').toLowerCase();
  
  // Introduces a variable nice that removes all non-alphanumeric characters and     // makes everything lowercase, splits the string, reverses then joins the strings
  var nice = words.replace(/[\W_]/g,'').toLowerCase().split('').reverse().join('');

  // An if statement to return true if the var cool and nice are equal, if not       // returns false 
  if (cool === nice){
    return true;
  }
    return false;
}

palindrome("2A3*3a2h");

