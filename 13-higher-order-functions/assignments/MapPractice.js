// .Map Practice 

// When you answer these questions I want to see your thought process in pseudo-code/comments.



const message = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'] 

// 1. Using the .map method and the provided array of strings (above), create a new array that containing only the first letter of each string.

// let firstLetter = message.map(x => x.prototype.charAt(0))
// console.log(firstLetter)

function getFirst(array){
  return array.map(x => x.charAt(0))
  }
console.log(getFirst(message))

// 2. Using the .map method and the provided array of strings (above), create a new array containing only words that are longer than 6 characters.

// function aboveSix(array){

// }

// 3. Using the .map method and the provided array of strings (above), create a new array containing 3 strings. 
// - The quote
// - The year (2015)
// - The source (Chris Pine - Learn JavaScript)