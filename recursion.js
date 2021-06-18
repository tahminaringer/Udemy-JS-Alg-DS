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

// Write a function called power which accepts a base and an exponent. the funciton should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - Don not worry about negative bases and exponents.
function power(base, exponent) {
  if(exponent === 0) {
    return 1;
  }
  return base * power(base, exponent-1);
}

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. Factorial zero (!0) is always 1.

function factorial(x) {
  if (x < 0) return 0;
  if(x <= 1) return 1;
  return x * factorial(x-1); 
}

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
function productOfArray(arr) {
  if(arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x-1);
}

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(num) {
  if (num <= 2) return 1;
  return fib(num-1) + fib(num-2);
}
