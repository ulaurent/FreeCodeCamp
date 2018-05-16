    // This Program Title Case's the first letter 
    // of each word in a sentence
    function titleCase(str) {
      
    // Introduced a variable words to split and lowercase 
    // into array of words 
    var words = str.toLowerCase().split(" ");
      
    // Constructed a foorloop to iterate through array
    for(i=0;i<words.length;i++){
      
    // Introduce two local variables lesson and location
    // in order to split each subarray and capitalize
    // the first letter
    var lesson = words[i].split("");
    
    var location = lesson[0].toUpperCase();

    lesson[0]=location;
    
    // Introduces variable together to join the sub 
    // array back together
    var together = lesson.join("");
    
    // Sets the changed subarray back to its location in the variable words
    words[i]= together;
    }
      
    // Lastly, we join words back together to return the final phrase
    var last = words.join(" ");

    return last;
    }

    titleCase("I'm a little tea pot");
