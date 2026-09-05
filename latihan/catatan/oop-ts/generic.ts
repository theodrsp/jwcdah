// Generic di function
// penjelasan: Generic membuat fungsi Anda menjadi fleksibel dan dapat digunakan kembali (reusable) untuk berbagai tipe data, tanpa kehilangan keamanan pengecekan tipe (type safety) khas TypeScript.

function identity<T>(value: T): T {
    return value
}

console.log (identity<string>("Hello There"))
console.log (identity<number>(123))

// typescript juga bisa otomatis membaca generic
console.log (identity("Hello World"))

// Generic di function 2 param
// T dan U adalah dua tipe data berbeda yang fleksibel
function pair<T, U>(first: T, second: U): string {
    return `Item 1: ${first} (tipe: ${typeof first}), Item 2: ${second} (tipe: ${typeof second})`;
}

// 1. Menentukan tipe data secara eksplisit (Manual)
console.log(pair<string, number>("Budi", 25));

// 2. TypeScript mendeteksi tipe data secara otomatis (Type Inference)
console.log(pair(true, "Sukses")); 
console.log(pair(100, [1, 2, 3])); 


// Generic di Class

class Box<T> {
    private content: T;
    
    constructor(content: T) {
        this.content =content
    }

    getContent(): T {
        return this.content
    }

}

let numberBox = new Box<number>(123)
console.log (numberBox.getContent())

let stringBox = new Box<string>("Babibubu")
console.log (stringBox.getContent())

// Generic pada Interface
interface UserInter<T,U> {
    name: T;
    age: U
}

const user1: UserInter<string, number> = {
    name: "Budiman",
    age: 42
}

// Generc Constraint : Memberi batasan pada generic
function logLength<T extends {length: number}>(item:T): void {
    console.log(item.length)
}

logLength("Hello")

logLength([1,2,3,4,5]);

// logLength(9863); // gabisa, karena tipe data number tidak punya length

// Generic tipe default
function logMessage<T=string>(message: T): void {
    console.log(message)
}

logMessage("Budi")
logMessage(90)