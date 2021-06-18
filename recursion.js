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

function sumRange(num) {
  if(num ===1) return 1;
  return num + sumRange(num-1)
}

//Factorial itteritively
function factorial(num) {
  let total = 1;
  for(let i = num; i > 1; i--) {
    total *= i;
  }
  return total
}

//Factorial recursively
function factorial(num) {
  if(num === 1) return 1;
  return num * factorial(num-1);
}

//helper method - used compiling an array or list

//Outer function
function outer(input) {
  var outerScopedVariable = [];

  // helper function
  function helper(helperInput){
    // modifys the outerScopedVariable
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVariable;
}

function collectOddsValues(arr) {
  let result = [];

  function helper(helperInput) {
    if(helperInput.length === 0) {
      return;
    }
    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

collectOddsValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Pure recursion
function collectOddsValues(arr) {
  let newArr = [];

  if(arr.length === 0) {
    return newArr;
  }
  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddsValues(arr.slice(1)));
  return newArr;
}
collectOddsValues(1, 2, 3, 4, 5);