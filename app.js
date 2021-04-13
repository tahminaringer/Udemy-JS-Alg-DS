'use strict';

//Excersize 19
// write a function which takes two numbers and returns their sum

// 1. can you restate the problem in your own words?
//write a function that adds two numbers
// 2. What are the inputs
// how large are the numbers? Are they integers? Are we only working with two inputs?
// 3. What are the outputs
// is it an integer, float, string, etc ?
// 4. Can the outputs be determined from the inputs? Do you have enough information to solve the problem
// what happens if someone only passes in one number? edgecases
// 5. How should I label the important pieces of data that are a part of the problem?

function sumOfTwoNumbers(sum1, sum2) {
  var sum = (sum1 + sum2);
  return sum
}

// Write a function which takes in a string and returns counts of each character in the string

function characterCount(string) {
  // make object to return at end
  var stringCounts = {}
  // loop over string, for each character
  for (let i = 0; i < string.lenghth; i++){
    var char = string[i].toLowerCase();
    // if character is a number/letter AND key in object, add one two count
    if (/[a-z0-9]/.test(char)) {
      if (stringCounts[char] > 0) {
        result[char]++;
        // if character is a number/letter AND not in object, add it and set value to 1
      } else {
        result[char] = 1;
      }
    }
    // if character is something else(space, period, etc) don't do anything
  }
  // return object
  return stringCounts;
}

//Refactor 1
function characterCount(string) {
  // make object to return at end
  var stringCounts = {}
  // loop over string, for each character
  for (var char of string){
    char = char.toLowerCase();
    // if character is a number/letter AND key in object, add one two count
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
    // if character is something else(space, period, etc) don't do anything
  }
  // return object
  return stringCounts;
}

//Refactor 2 - Most efficient
function characterCount(string) {
  // make object to return at end
  var stringCounts = {}
  // loop over string, for each character
  for (var char of string){
    // if character is a number/letter AND key in object, add one two count
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
    // if character is something else(space, period, etc) don't do anything
  }
  // return object
  return stringCounts;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alph (A-Z)
      !(code > 96 && code < 123)) {// lower alpha (a-z)
    return false;
  }
  return true;
}

charCodeAt(0);

// Write a function called same which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. the frequency of values must be the same.

//same ([1, 2, 3], [4, 1, 9]) true
//same ([1, 2, 3], [1, 9]) false
//same ([1, 2, 1], [4, 4, 1) false

function same(array1, array2) {
  // if arrays are not the same length return false
  if(array1.lenghth !== array2.lenghth){
    return false;
  }
  for(let i = 0; i < array1.lenghth; i++) {
    //Checks to see if array1[i] squared is in array2
    let correctIndex = array2.indexOf(array1[i] ** 2);
    // if it is not in array2 it will return false
    if(correctIndex === -1) {
      return false;
    }
    // if array1^2 is in array two then remove it from array and continue to next index
    array2.splice(correctIndex, 1);
  }
  //finally if all are found/match return true;
  return true;
}

// refactored

function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  //use objects to count the individual values in array
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  //loop over array add one to frequency counter if there or add one if does not exist
  for(let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1;
  }
  for(let val of arr) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
  }
  // loop over counter1 to see if exists in counter2
  for(let key in frequencyCounter1) {
    //if not return false
    if(!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  //if all exist return true
  return true;
}



