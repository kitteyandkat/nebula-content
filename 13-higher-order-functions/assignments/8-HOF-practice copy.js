// .sort()

// 1.   Write a HOF to sort an array of numbers from largest to smallest
const nums = [1,25,6,3,88,45,0]

console.log(nums.sort((a,b)=> b-a))

function largeToSmall(array) {
    return array.sort((a,b)=> b-a) 
  }
  
  console.log(largeToSmall(nums))

// 3.   Write a HOF to sort peoples names by their length
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]

// let firstName = 

// console.log(firstName)

function nameLength (array) {
    return array.sort((a, b) => a-b)
}

console.log(nameLength(partyPeople))




// 4.   Write an HOF to sort an array of objects of people by their age youngest to oldest

let ages = nums

function largeToSmall(array) {
    return array.sort((a,b)=> a-b)
  }
  
  console.log(largeToSmall(ages))

// 5.   Write an HOF to sort an array of strings by the last letter of the string
const strings = ['sam', 'john', 'daniel', 'vanessa']