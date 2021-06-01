'a'.charCodeAt(0);

// give the hash for where the 0 index of hi is stored at
'hi'.charCodeAt(0);//character code at index 0

// gives the has for where the 1 index of hi is stored at
'hi'.charCodeAt(1)//character code at index 1

let total = 0;
total += 'hello'.charCodeAt(0) - 96 //Index 0 of string is h, minus 96 give the index of the character in the alphabet
total += 'hello'.charCodeAt(1) - 96 //Index 0 of string is e
total += 'hello'.charCodeAt(2) - 96 //Index 0 of string is l
total += 'hello'.charCodeAt(3) - 96 //Index 0 of string is l
total += 'hello'.charCodeAt(4) - 96 //Index 0 of string is o

// Hash for strings only:
function hash(key, arrayLength) {
  let total = 0;
  for (let char of key) {
    // map 'a' to 1, 'b' to 2, 'c' to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }
  return total;g
}