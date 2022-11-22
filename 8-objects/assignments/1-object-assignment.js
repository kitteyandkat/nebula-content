// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
let car = {
    Model: "Macan",
    Make: "Porsche",
    Turbo: true,
    InsuredDrivers: ['Sarah', 'Lukas', 'Cynthia'],
    Year: 2022,
    TorqueVectoring: true,
};

// 2.   Using dot-notation Log to the console 3 properties from the previous object
console.log(car.Model)
console.log(car.InsuredDrivers)
console.log(car.Year)



// 3.   Using bracket-notation Log to the console 3 properties from the previous object
console.log(car['Make'])
console.log(car['Turbo'])
console.log(car['TorqueVectoring'])

// 4.   Try and log a property that doesn't already exist - what output do we get?
console.log(car.color)

// 5.   Add a new key-value pair to the vehicle. 
car.color = 'Black'

// 6.   Using bracket-notation update a property on the vehicle. 
car['Year'] = 2023
console.log(car.Year)
// 7.   Using dot-notation update a property on the vehicle. 
car.InsuredDrivers[1] = 'Abraham'
console.log(car.InsuredDrivers)

// 8.   Create a method for turning your vehicle on
car.engine = ['On', 'Off']

    if(car.engine === "On"){
        console.log("Engine On");
      }
    
      if(car.engine === 'Off'){
        console.log("Engine Off");
      }

function EngineStart(){
    return car.engine[0]
}

// 9.   Create a method for turning your vehicle off
function EngineOff(){
    return car.engine[1]
}

//10.   
//      a. Check if your vehicle is on (it should be off)
console.log(car.engine)
//      b. Start your vehicle
//      c. Check if your vehicle is on (it should be on)
//      d. Stop your vehicle
//      e. Check if your vehicle is on (it should be on)




