// 1. Write a loop that doubles each number in an array and returns the array of doubled numbers
let num = [9092, 2397, 42214, 22142, 1463, 74215, 8462, 901283]
let doubled = []
for (let i = 0; i < num.length; i++) {
    let doublednums = num[i]
    let doublednums2 = doublednums * 2
    doubled.push(doublednums2)
}
console.log(doubled)

// 2. Write a loop that counts the number of times a letter appears in a string

const str = 'Watermellon Bubblegum'
const letter = 'e'
let lettercount = 0
for (let i = 0; i < str.length; i++) {
    let letters = str.split('')
    for (i = 0; i < letters.length; i++) {
        if (str[i] == letter) {
            lettercount++
        }
    }
    console.log(lettercount)
}



// 3. Write a while loop that counts down from 10 to 0

let count = 10
while (count > 0) {
    count--
    console.log(count)
}


// 4. Write a loop that takes  an array of numbers and return the sum of all the even numbers

const NumberArray = [1935, 25432, 17124, 454122, 6912, 9431, 4528, 7212, 33569, 232147]
let sum = 0
let i = 0
for (let i = 0; i < NumberArray.length; i++) {
    if (NumberArray[i] % 2 === 0) {
        sum = sum + NumberArray[i]
    }
}
console.log(sum)


// 5. Write a loop that takes an array of numbers and returns the sum of all the numbers that are divisible by 5


let f = 5
let sum2 = 0
for (let i = 0; i < NumberArray.length; i++) {
    if (NumberArray[i] % f === 0) {
        sum2 += NumberArray[i]
    }
}
console.log(sum2)

// 6. Write a loop that takes an array of numbers and returns the sum of all the numbers that are divisible by 5

// 7. Write a while loop that adds consecutive numbers (1+2+3+4.....) and exits when the number is divisible by 7
// ie: 1st Loop  1+2 = 3    Break if divisible by 7 False
// ie: 2nd Loop  1+2+3 = 6  Break if divisible by 7 False
// ie: 3rd Loop  1+2+3 = 6  Break if divisible by 7 False