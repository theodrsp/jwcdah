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

const product1 = new Product("Laptop", 1500)
const product2 = new Product("Handphone", 1500)
const product3 = new Product("Mouse", 1500)

console.log (product1)
product1.displayProduct()
product2.displayProduct()
product3.displayProduct()
