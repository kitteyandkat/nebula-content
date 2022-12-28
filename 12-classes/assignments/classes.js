/* 
Write a class that creates animals
The animals should make a noise
The class should log what the animal eats
The class should log where the animal lives
Initialize 3 animals with your class & log a sentence to the console, ex:
`Dogs live in peoples houses, they bark and are carnivorous.`
*/
class animals {
    constructor(species, sound, diet, habitat) {
        this.species = species;
        this.sound = sound;
        this.diet = diet;
        this.habitat = habitat;
    }
    bio() {
        return `${this.species}s eat ${this.diet}, live in ${this.habitat} and say "${this.sound}".`
    }
}


let animals1 = new animals("Shark", "nothing", "any sea creature", "the ocean");
let animals2 = new animals("Cheetah", "chirrup", "antelope", "grasslands")
let animals3 = new animals("Eland", "click", "grass", "miombo woodland areas")



console.log(animals1.bio())
console.log(animals2.bio())
console.log(animals3.bio())

/* 
Write a class that creates shoes
The shoe should have a size, color, type, and age. 
Initialize 3 shoes with your class & log a sentence to the console: ex:
`My flipflops are yellow, size 9, and 6 years old.` 
*/

class shoes {
    constructor(brand, size, age, color) {
        this.brand = brand;
        this.size = size;
        this.age = age;
        this.color = color;

    }
    shoeStats() {
        return `My size ${this.size}, ${this.color} ${this.brand}'s are ${this.age} years old `
    }
}
    
    let shoe1 = new shoes("Louboutin Bianca", "42 EU", "8", "Patent Leather")
    let shoe2 = new shoes("Yeezy Boost 380", "10.5 US", "1", "Pyrite")
    let shoe3 = new shoes("Alaïa La Bombe 90", "IT41", "3", "Black Suede")

console.log(shoe1.shoeStats())
console.log(shoe2.shoeStats())
console.log(shoe3.shoeStats())