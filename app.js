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