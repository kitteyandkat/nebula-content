// // //1. Write a statement that checks if 2 and 'two' are equal
console.log('two' !== 2)

// // //2. Write a statement that checks if '2' and 2 are loosely equal
console.log('2' != 2)

// // //3. Write a statement that checks if 14 and '14' are strictly equal
console.log('14'=== 14)

// // //4. Write a statement that checks if 10 is greater than -100
console.log(10 > -100)

// // //5. Write a statement that checks if 4 is strictly equal to the rounded value of 4.4
console.log(4 === 4.4)

// // //6. Write a statement that checks if 10 is greater than or equal to 9.1 rounded up
console.log(10 >= 9.1)

// // //7. Write a statement that checks if 10 is greater than 2 and 3 is greater than 4
console.log(10 > 2, 3 >4)

// //   // 7.a Without changing any of the numbers, or their order. How do we make this print true?

// //8. Pick a number between 1-20 and assign it to a variable
let a = 4
//   // This is the number of watermelons you purchased.
//   //
//   // If your number of watermelons is 1 or 2, console.log 'Looks like you like watermelon'
//   // If your number of watermelons is more than 2, console.log 'Thats a lot of watermelon'
//   // If your number of watermelons is more than 5, print, 'Thats too many watermelon!'
//   // If your number of watermelons is more than 10, print, 'You must be CRAZY for watermelon!'
//   // If your number of watermelons is more than 15, print, 'Did you have a coupon?'

//   if(numOfWM === 1 || numOfWM ===  2) {
//     console.log('Looks like you like watermelon')
//   } else if (numOfWM > 2 && numOfWM <= 5) {
//     console.log('Thats a lot of watermelon')
//   } else if (numOfWM > 5 && numOfWM <= 10){
//     console.log('Thats too many watermelon!')
//   } else if (numOfWM > 10 && numOfWM <= 15) {
//     console.log('You must be CRAZY for watermelon!')
//   } else {
//     console.log('Did you have a coupon?')
//   }

console.log('Thats a lot of watermelon')

// //9. Create a variable that represents your current hunger on a level of 1-10
let hunger = 1
//   // Using a ternary, if your hunger is greater than 6 print, 'Time to eat!'
//   // Otherwise print. "I'm not hungry"

if(hunger = 1){
  console.log("I'm not hungry");
}


// 10. Think of an Magic-8 Ball
  // Write a switch statement that works the same way. 
  // When you run this file you should
  // Generate a random number
  // And get an out put from your switch statement?
  // Ex: 
    // I update a question variable to say "Will I win the lottery?"
    // I run node <FILENAME> 
    // The console prints out:
      // Will I win the lottery? Not Likely. 


  
  
  

  
    const randomNum = Math.ceil(Math.random() * 20) 
    const question = "Will I pass the AWS exam"

    switch(randomNum) {
      case 1:
        console.log(`${question}: It is Certain`)
        break;
      case 2:
        console.log(`${question}: It is decidely so`)
        break;
      case 3:
        console.log(`${question}: Without a doubt`)
        break;
      case 4:
        console.log(`${question}: Yes definitely`)
        break;
      case 5:
        console.log(`${question}: You may rely on it`)
        break;
      case 6:
        console.log(`${question}: As I see it, yes`)
        break;
      case 7:
        console.log(`${question}: Most likely`)
        break;
      case 8:
        console.log(`${question}: Outlook good`)
        break;
      case 9:
        console.log(`${question}: Yes`)
        break;
      case 10:
        console.log(`${question}: Signs point to yes`)
        break;
      case 11:
        console.log(`${question}: Reply hazy, ask again`)
        break;
      case 12:
        console.log(`${question}: Ask again later`)
        break;
      case 13:
        console.log(`${question}: Better not tell you now`)
        break;
      case 14:
        console.log(`${question}: Cannot predict now`)
        break;
      case 15:
        console.log(`${question}: Concentrate and ask again`)
        break;
      case 16:
        console.log(`${question}: Don't count on it`)
        break;
      case 17:
        console.log(`${question}: My reply is no`)
        break;
      case 18:
        console.log(`${question}: My sources say no`)
        break;
      case 19:
        console.log(`${question}: Outlook not so good`)
        break;
      case 20:
        console.log(`${question}: Very doubtful`)
        break;
    }
// BONUS:
  // On the prior example, try and have the answer print like someone is speaking to you.
  
  // Ex:
    //Input:  Will I win the lottery?
    //Output: Will you win the lottery? Not likely. <- Notice I has been programmatically changed to you

  // Ex2:
    // Input: Will I get a new pet this year?
    // Output: Will you get a pet this year? It is certain. 

  // Try and handle many edge cases - can we put in any question and have it spit out a gramatically correct response?


//     const randomNum1 = Math.ceil(Math.random() * 20) 
//     let question1 = "Will I pass the AWS exam"
//     if(question1 = "Will I pass the AWS exam"){
//       console.log("Will you pass the AWS exam");
//     }
// Boolean(question1)
        
//     switch(randomNum1) {
//       case 1:
//         console.log(`${question1}? It is Certain! :)`)
//         break;
//       case 2:
//         console.log(`${question1}? It is decidely so. :)`)
//         break;
//       case 3:
//         console.log(`${question1}? Oh, without a doubt!`)
//         break;
//       case 4:
//         console.log(`${question1}? Yes, definitely!`)
//         break;
//       case 5:
//         console.log(`${question1}? You may rely on it!`)
//         break;
//       case 6:
//         console.log(`${question1}? As I see it, yes!`)
//         break;
//       case 7:
//         console.log(`${question1}? Most likely!`)
//         break;
//       case 8:
//         console.log(`${question1}? The outlook is good!`)
//         break;
//       case 9:
//         console.log(`${question1}? Yes!`)
//         break;
//       case 10:
//         console.log(`${question1}? All signs point to yes!`)
//         break;
//       case 11:
//         console.log(`${question1}? My reply is hazy, ask again.`)
//         break;
//       case 12:
//         console.log(`${question1}? Honestly? Ask again later.`)
//         break;
//       case 13:
//         console.log(`${question1}? I better not tell you now...`)
//         break;
//       case 14:
//         console.log(`${question1}? I cannot predict now.`)
//         break;
//       case 15:
//         console.log(`${question1}? You should oncentrate and then ask again.`)
//         break;
//       case 16:
//         console.log(`${question1}? Don't count on it dear.`)
//         break;
//       case 17:
//         console.log(`${question1}? My reply is no.`)
//         break;
//       case 18:
//         console.log(`${question1}? My sources say no.`)
//         break;
//       case 19:
//         console.log(`${question1}? The outlook is not so good...`)
//         break;
//       case 20:
//         console.log(`${question1}? I am very doubtful.`)
//         break;
//     }

