//Program factorilizes an integer

function factorialize(num) {
  //Executes a forloop with initial variable starting at 1
  for(i=1;num>1;num--){
    i = i*num;
  }
  //Then the forloop returns i as the factorial of the function
  return i;
}
factorialize(5);

