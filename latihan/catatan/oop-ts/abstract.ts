//  Abstract Class -> Class yang tidak bisa diinstansiasi langsung
// Biasanya digunakan sebagai template untuk class turunan

abstract class Animal {
    abstract makeSound():void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log('bark')
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log('Meow')
    }
}