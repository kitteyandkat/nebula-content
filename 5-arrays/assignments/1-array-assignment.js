// 1.   Create an array that contains two of your favorite things to do
const favoriteThings = ["Surfing", "Playing Video Games"]
console.log(favoriteThings)

// 2.   Using an array method, add another thing you like to do to that list
favoriteThings.push('Eating')
console.log(favoriteThings)

// 3.   Reverse the order of the array (remember, if needed use MDN)
console.log(favoriteThings[2],favoriteThings[1], favoriteThings[0])


//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const practice = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// 4.   log the length of the array
console.log(practice.length)

// 5.   log the 4th element in the array
console.log(practice[4])

// 6.   Remove the first element in the array. Log the new array and the element removed from the array
practice.shift()
console.log(practice)

// 7.   Put 'Sunday' back at the beginning of the array and log the new array
practice.unshift('Sunday')
// 8.   Remove the last element in the array. Log the new array and log the element removed
practice.pop()
console.log(practice)
// 9.   Add 'Saturday' back to the end of the array and log the new array
practice.push('Saturday')
console.log(practice)

//10.   Replace 'Thursday' with 'Friday Junior'
practice[4]= 'Friday Junior'

console.log(practice)

//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
let favoriteday= practice[0]

console.log(`My favorite day of the week is ${favoriteday}.`)

//12.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']

console.log(phone.concat(laptop))

//13.   Write a line of code to test if something is an array or not
console.log(Array.isArray(practice))