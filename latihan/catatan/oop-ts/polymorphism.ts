// Polymorphism
class Animal {
    makeSound() {
        console.log ("Some Generic Animal sound")
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("woof woof!")
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log ("Meow meow!")
    }
}

const pitbull = new Dog()
const kucing = new Cat()

pitbull.makeSound()
kucing.makeSound()