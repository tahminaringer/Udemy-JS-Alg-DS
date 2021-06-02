//Frequency Counter
//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. 

//Solution must have Big O of O(N)

// Example:
// sameFrequency(182, 281) true
// sameFrequency(34, 14) false

function sameFrequency(int1, int2) {
  let strInt1 = int1.toString();
  let strInt2 = int2.toString();
  if (strInt1.length !== strInt2.length) return false;

  let countInt1 = {};
  let countInt2 = {};

  for (let i = 0; i < strInt1.length; i++) {
    countInt1[strInt1[i]] = (countInt1[strInt1[i]] || 0) + 1;
  }
  for (let j = 0; j < strInt1.length; j++) {
    countInt2[strInt2[j]] = (countInt2[strInt2[j]] || 0) + 1;
  }
  for (let key in countInt1) {
    if (countInt1[key] !== countInt2[key]) {
      return false;
    }
  }
  return true
}

// Frequency Counter / Multiple Pointers- Are there duplicates

//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern or the multiple pinters pattern.

// Example:
areThereDuplicates(1, 2, 3) //false
areThereDuplicates(1, 2, 2) // true

//Are there duplicates Solution(Frequency Counter)
function areThereDuplicates() {
  let collection = {};
  for(let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if(collection[key] > 1) return true;
  }
  return false;
}

//Are there duplicates Solution(Multiple Pointers)
function areThereDuplicates(...args) {
  //two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length) {
    if(args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// one liner solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
