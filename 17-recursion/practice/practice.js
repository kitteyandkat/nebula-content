// Find the factorial of 5 and 14
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 14! = 14 * 13 * 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 87178291200

function factorial(n) {
    // positive and negative numbers have factorals
    // for negative numbers the imaginary part of complex factorials is zero
    //Π(−1,𝑧+1)=−(𝑧+1)Π(−1,𝑧)
    if (n > 0 || n < 0) {
        return n * factorial(n - 1);
        // if number is 0 the factorial is 1
    } else {
        if (n == 0) {
            return 1;
        }
    }
}

console.log(factorial(5))
console.log(factorial(14))


// Write a function to make Bender the bending unit and Calculon the calculating unit fight each other until one of them has a durability of 0 or less. 
// The robots should throw punches that have a 50% chance of hitting the other robot. 
// If the punch hits, the other robot's durability should be reduced by the punchPower of the robot that threw the punch. 
// The function should return the name of the robot that won the fight. 
// If both robots die at the same time, the function should return 'Both robots died'.;
const bender = { name: 'Bender', durability: 25, punchPower: 3 };
const calculon = { name: 'Calculon', durability: 30, punchPower: 2 };

function whichRobot(robot1, robot2) {
    return Math.random() >= 0.5 ? robot1 : robot2
}

const fight = (robot1, robot2) => {
    if (whichRobot(robot1, robot2) === true) {
        robot2.durability -= robot1.punchPower
    } else {
        if (whichRobot(robot1, robot2) === false) {
            robot1.durability -= robot2.punchPower
        } else {
            if (robot1.durability === 0) {
                console.log(`${robot2} won the fight`);
            } else {
                if (robot2.durability === 0)
                    console.log(`${robot1} won the fight`)
            }
        }
    }
}

    console.log(fight(bender, calculon))