// tipe data string
let nama: string = "Budi"

// tipe data number
let age: number = 25

let isMarried: boolean = true

// Tipe data array
let numbers: number[] = [1,2,3,4,5]
let hobbies: string[] = ['basket', 'futsal', 'catur']

// Tipe data tupple
let person:[string, number, number] = ['ranggo', 25, 43]

console.log (nama, age, isMarried, numbers, hobbies)

// tipe data any
let variable: any
variable = "ranggo"
variable = 25
variable = true

console.log(variable)

function logValue(value:any) {
    console.log(value)
}

logValue("Ini dari API")
logValue(25)

// Union Types dan Literal Types
// Union Types: Digunakan ketika sebuah variabel bisa memiliki lebih dari satu tipe data
let id: string| number;
id = "ABC123";
id=123 // ini juga diperbolehkan

let arr: (string|number)[] = [1,2,3,4, 'ok']


// Literal Types
// Digunakan untuk membatasi variabel agar hanya bisa menyimpan nilai tertentu

let status: "success" | "failure";
status = "success"

console.log(status)

// Type Aliases -> untuk mendefinisikan untuk tipe data yang kompleks atau panjang

type ID = number | string;

let userID:ID;
userID = 123; // valid
userID = "ABC" // valid

type User = {
    id: number,
    name: string,
    isOnline : boolean
}
const user1: User = {
    id: 1,
    name: 'Ranggo',
    isOnline: true
}

const user2: User = {
    id: 2,
    name: 'Budi',
    isOnline: true
}
console.log(user1)
console.log(user2)