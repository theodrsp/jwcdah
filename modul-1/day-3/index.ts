// IF STATEMENT
let age: number = 20;

if (age >=17){
    console.log("Now you can create identity card")
}

let isVIPMember: boolean = false;

if (isVIPMember) {
    console.log("Welcome back, VIP Guest!")
}

// Nested If
const userAge: number = 20;
const hasStudentCard: boolean = true;

if (userAge >=17) {
    console.log("Access Granted: You are  allow to watch")
    if (hasStudentCard) {
        console.log("Student discount applied: You get a 20% discount!")
    }
};

// IF ELSE STATEMENT
// skenario: cek kecukupan saldo untuk beli kopi
const accountBalance: number = 25000;
const cofeePrice: number = 30000;

if (accountBalance >= cofeePrice) {
    console.log("Trx successfull! Enjoy Your Coffee")
} else {
    console.log("Trx Failed! Insufficient balance!")
}

// ELSE IF STATEMNT
const visitorAge: number = 12;

if (visitorAge < 5) {
    console.log("Ticket Price: Free")
} else if(visitorAge <=17) {
    console.log("Ticket Price : Child-Teen Rate (5$)")
} else if (visitorAge <= 60) {
    console.log("Ticket Price: Adult Rate ($10) ")
} else {
    console.log("Ticket Price: Senior Citizen ($6)")
}

// Nested If Else
// skenario: login ke sebuah system 
const username: string = "john.doe"
const accountType: string = "GUEST";

if (username ==="john.doe") {
    if (accountType ==="ADMIN"){
        console.log ("Access Granted")
    } else {
        console.log ("Invalid Username!")
    }
    
}

// SWITCH CASE STATEMENT
// skenario: Menentukan aksi pengemudi berdasarkan warna lampu lalu lintas

const trafficLightColor: string = "yellow"

switch(trafficLightColor) {
    case "red":
        console.log("Stop! The light is red");
        break;
    case "yellow":
        console.log("Caution! The light is yellow");
        break;
    case "green":
        console.log("Go! The light is red");
        break;
    default: 
        console.log("Invalid Traffic")
        break;
}

// skenario: cek apakah user sudah mengisi nama profil
const usernamePerson: string = ""; // string kosong -> falsy value

if (usernamePerson) {
    console.log("welcome " + usernamePerson)
} else {
    console.log("Please enter your password")
}

// Logical Operator
// AND (&&) -> Wajib kedua statement bernilai tinggi
// OR (||) -> jika salah satu true
// NOT (!) -> lawan dari nilai yang sudah ditetapkan

// skenario: naik wahana roller coaster
const userHeightCm: number = 160;
const hasHeartCondition: boolean = false;

// kondisi: tinggi >=45 AND NOT punya penyakit jantung (!hasHeartCondition artinya TIDAK punya penyakit jantung)
if(userHeightCm >= 145 && !hasHeartCondition) {
    console.log("Permission Granted! You can ride the roller coaster!");
} else {
    console.log("Access Denied! You cant access roller coaster!")
}

// statement combination
const statementA: boolean = true;
const statementB: boolean = false;
const statementX: boolean = statementA;
const statementY: boolean = statementB;

// skenario: validasi batasan user ingin login
const inputPassword = "johndoe123";
const inputAttempt = 8;
const maxAttempt = 5

if (inputPassword === "johndoe123" && inputAttempt <= maxAttempt) {
    console.log("Access Granted");
} else {
    console.log("Access Deniew or Max Attempt reached!")
}


// Ternary Operator:
console.log(" --- TERNARY OPERATOR --- ")
// const examScore: number = 80;
// let examResult: string;

// if (examScore >= 75) {
//     examResult = "PASSED"
// } else {
//     examResult = "FAILED"
// }

// cara pakai ternary operator
const examScore: number = 80;
const examResult: string = examScore >=75? "PASSED" : "FAILED";
console.log(examResult)