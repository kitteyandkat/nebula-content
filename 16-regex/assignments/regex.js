// 1.   Write a function that tests if a string contains the string of '123' within it


// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false



// 3.   Write a function that reports how many instances of a given string there are 
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'


// 4.   Write a function that checks if all characters in a string are lowercase letters


// 5.   Write a function that checks if a string has an uppercase letter


// 6.   Write a function that checks if a string contains a dash or underscore 


// 7.   Write a function that utilizes regex to check if a string contains '.com' at the end
let website1 = "iamcool.org"
let website2 = "iamcool.ocm"
let website3 = "iamcool.com"
//let com = /.[com]{3}$/
let com = /\.c[^o]*o[^m]*m$/

function dotCommercial(x){
    return com.test(x)
}

console.log(dotCommercial(website1))
console.log(dotCommercial(website2))
console.log(dotCommercial(website3))

// 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning


// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not


// 10.   Write a function that utlizes regex to replicate the functionality of '  string  '.trim()
