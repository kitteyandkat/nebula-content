// 1.   Write a higher-order function which takes in two numbers and performs a calculation with them
//      Write the callback functions seperately 
//          Ex: calculate(multiply, 2,4) => 8
//          Ex: calculate(subtract, 2,4) => -2
//          Ex: calculate(exponent, 2,4) => 16


const calculate = (num1, num2, func) => {
    const calculation = func(num1, num2);
    return calculation;
}

function add (num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}
function exponent(num1,num2){
    return num1 ** num2;
}

console.log(divide(2,4))

console.log(calculate(2,4, multiply))
console.log(calculate(2,4, subtract))
console.log(calculate(2,4, exponent))



// 2.   Write a function that takes in any number of numbers and performs calculations on them
//      Write the callback functions seperately 
//      console.log(arguments) inside of a function to visualize your arguments
//          Ex: calculateAll(multiply, 1,4,1,231,5) => 4620
//          Ex: calculateAll(subtract, 2,4,5,7) => -14

function calculateAll (input){
    for (let i = 0; i < input.length; i++) {
        return 



    }

// 3.   Write a function that takes in a string and performs some form of manipulation on it
//          Ex: modify(yeller, 'I need a nap') => I NEED A NAP!!!
//          Ex: modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
//          Ex: modify(code, 'There is no cake') => Th-r- -s n- c-k-

let sampleString = "I need a nap"

function upperCase(String){
    return String.toUpperCase()
}

console.log(upperCase(sampleString))



// 4.   Write a function that takes in an array filled with different data types and returns each data type
//          Ex: oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['I love coding, 'goosfraba']
//          Ex: oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['Nested Array!']
//          Ex: oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => [10, Infinity]