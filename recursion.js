// Recursion
// a process( a function)that calls itself
// JSON.parse/JSON.stringify are recursive functions
// document.getElementById and DOM traversal algorithms
// Object traversal
// Cleaner alternative to iteration

//Call stack
// When function is invoked it is pushed to the top of the call stack
// When something is returned or the function ends it is removed from the call stack

// Two essential parts to a recursive function
// Base case is where the recursive function stops
// Different Input each recursion until hit basecase

//Recursive
function countDown(num) {
  if (num <= 0) {
    console.log('All Done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(5)

//Iterative
function countDown(num) {
   for (var i = num; i >0; i --) {
     console.log(i);
   }
   console.log('All done!');
}
countDown(5);
