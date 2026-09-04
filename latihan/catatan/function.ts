// FUNCTION

// Optional '?' Paramater
// Parameter default (sudah diassign di awal sebagai default input) -> ex: isMarried = false

function greet(name: string, age?: number, isMarried = false): string {
    if (age) {
        return `Hello ${name}, your age  ${age} years old\nStatus Marriage: ${isMarried}`
    }
    return `hello, ${name}\nStatus Marriage: ${isMarried}`;
}

console.log(greet("Alice", 18, true))
console.log(greet("Kelvin", 17))

// Void : tipe parameter yang bisa mengembalikan nilai (cocok pake console.log)
function logMessage (message:string):void {
    console.log (message)
}

// never : tidak akan pernah selesai
function throwError (message:string): never {
    throw new Error(message)
}

// Tanpa Arrow function (function declaration)
function multiplys (x: number, y: number): number {
    return (x* y);
}
console.log(multiplys(5,6))

// Tanpa Arrow function (function expression)
let multiples = function(x: number, y: number): number {
    return x * y;
};

console.log(multiples(5, 6));

// Arrow Function 1

let multiply = (x: number, y: number): number => x* y;

console.log(multiply(5,6))

// Arrow Function 2
let countPriceAftDisc = (price: number, discount: number): number => {
    let discPrice: number = price * discount;
    let priceAftDisc = price - discPrice;
    return priceAftDisc
}

console.log(countPriceAftDisc(100000, 0.1))


// Overloading Function
function combine (a: number, b: number): number;
function combine (a: string, b: string): string;
function combine (a: any, b:any) : any{
    if (typeof a ==='number' && typeof b ==='number') {
        return a+b
    }
    if (typeof a ==='string' && typeof b ==='string') {
        return a + b + 'ini string'
    }
}

console.log(combine(10,20))
console.log(combine("hello ", "world "))