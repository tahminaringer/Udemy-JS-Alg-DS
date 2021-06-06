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
  for (let j = 0; j < strInt2.length; j++) {
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

//Multiple Pointers - averagePair
//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target. 

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length-1;
  while(start < end) {
    let avg = (arr[start] + arr[end])/2;
    if (avg === num) {
      return true;
    }
    else if (avg < num) {
      start ++;
    }
    else {
      end--;
    }
  }
  return false;
}

//Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. in other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing

//Iterative

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) {
    return true;
  }
  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}

//Recursive
function isSubsequnce(str1, str2) {
  if(str1.length === 0) return true;
  if(str2.length === 0) return false;
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}
