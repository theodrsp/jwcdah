interface User {
    name: string,
    age : number,
    isAdmin? : boolean  // optional property (?)
    greet(): string
}

// interface merging
interface User {
    status: boolean
}

// interface Inheritance
interface Employee extends User{
    employeeId : number
}

const user1: User = {
    name: "Budi Joe",
    age : 22,
    greet() {
        return `hello ${this.name}`
    },
    status : true

}

const employee1: Employee = {
    employeeId: 123,
    name: "John Doe",
    age : 22,
    isAdmin: true, //bisa dimasukkan data atau tidak, karena property sudah di set (?) optional
    greet() {
        return `hello ${this.name}`
    },
    status : false
}

// index signature
interface StudentScoreByName {
    [key: string] : number
}

const studentScore: StudentScoreByName = {
    budi : 90,
    andi : 80,
    yanto : 78
}

interface Add {
    (a: number, b: number): number
}

const add: Add = (a,b) => a+b

console.log(add(2,7))