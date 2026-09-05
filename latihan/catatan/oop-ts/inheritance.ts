class Product {
    // Properti
    name: string;
    price: number;
    
    // Constructor (kaya def __init__ di python)
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price
    }

    // method
    displayProduct (): void {
        console.log(`Product Name: ${this.name}, Price : $${this.price}`)
    }
}

class Electronic extends Product {
    // properti child
    warranty: number;
    
    constructor(name: string, price: number, warranty: number) {
        super(name, price)
        this.warranty = warranty
    }

    displayElectronic(): void {
        console.log (`warranty : ${this.warranty} years`)
        super.displayProduct()
    }
}

const electronic1 = new Electronic("Smartphone", 1000, 2)
console.log(electronic1)
electronic1.displayElectronic()

