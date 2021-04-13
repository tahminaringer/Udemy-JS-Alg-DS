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
  for(let val of arr2) {
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

//ANAGRAMS 
// Given 2 strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram('', '') true
// validAnagram('aaz', 'zza') false
// validAnagram('anagram', 'nagaram') true
// validAnagram('rat', 'car') false
// validAnagram('awesome', 'awesom') false
// validAnagram('qwerty', 'qeywrt') true
// validAnagram('texttwisttime', 'timetwisttext') true

function validAnagram(sting1, string2){
  if(sting1.length !== string2.length) {
      return false;
  }

  let lookup = {};

  for(let i = 0; i < sting1.length; i++) {
    let letter = sting1[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  for(let i = 0; i < string2.lenght; i++) {
    let letter = string2[i];
    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

//Pointers -
// Write a function called sumZero which accepts a sorted array of integers. the function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

//sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
//sumZero([-2, 0, 1, 3])// undefined
//sumZero([1, 2, 3]) // undefined

//easy but not time sensitive O(n^2)
function sumZero(array) {
  for(let i =0; i < array.lenghth; i ++) {
    for(let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === 0){
        return [array[i], array[j]];
      }
    }
  }
}

//refactored Time O(n) Space O(1)

function sumZero(arr) {
  let left = 0;
  let right = arr.lenght -1;
  while(left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right --;
    } else {
      left ++;
    }
  }
}

// count unique values
// implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  if(arr.length === 0) {
    return 0;
  }
  var i = 0
  for (var j = 1; j < arr.lenghth; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1;
}