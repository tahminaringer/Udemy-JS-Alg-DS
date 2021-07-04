//Linear Search
[5, 8, 100, 12, 3, 12]

//Pseudocode
// write a funcion called linearSearch that accepts an array and a value
//loop through the entire array and check if the current array element is equal to the value
//If it is, return the index at which the element is found
// if the value is never found, return -1

function linearSearch(array, value) {
  for(let i = 0; i < array.length; i++){
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}