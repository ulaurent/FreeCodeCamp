 //This program finds the longest word in a string

 function findLongestWord(str) {
 // Initialize local variable words and maxLength
 var words = str.split(' ');
 var maxLength = 0;
 // Constructed for lopp to return the longest word within any string
 for (i = 0; i < words.length; i++) {
   if (words[i].length > maxLength) {
     maxLength = words[i].length;
   }
 }
 return maxLength;
}
 findLongestWord("The quick brown fox over the lazy dog");
