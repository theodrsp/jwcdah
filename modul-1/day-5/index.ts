const myLaptop = {
    brand: "Macbook Pro",
    ramGb : 16,
    isTurnedOn: false,
    turnOn() {
        this.isTurnedOn = true; //this untuk menunjuk properti milik object itu sendiri
        console.log("Laptop is booting up ...");
        return true;
    }, 
};

const myPhone = {
    brand: "Samsung",
    storageGb: 256,
    color: "Black"
}

//  dot notation
console.log("brand my laptop : ", myLaptop.brand);
console.log("turn on my laptop: ", myLaptop.turnOn());

// bracket notation
const targetKey = "storageGb";
console.log("storage of my phone: ", myPhone[targetKey])

// -- Optional Chaining (?.)
// memeriksa properti tanpa resiko app crash jika nilainya undefined
// const cameraRes = myPhone.specs?.cameraMegaPixels;

// -- Accessing Keys: (mengambil daftar kunci dari objek)
// mengambil semua nama properti

const phoneKeys = Object.keys(myPhone);
const laptopKeys = Object.keys(myLaptop);
console.log(phoneKeys);
console.log(laptopKeys)

console.log("---MUTABLE & IMMUTABLE---")
// immutable -> tipe variable yang tidak bisa dirubah (string, integer, float)
// mutable --> tipe variable yang bisa dirubah (list, array, dictionary)

// -- Immutable (Primitive)
let userScore: number = 100;
userScore = 60 // membuat nilai baru 150 di memori
let saveScore: number = userScore

console.log(userScore)
console.log(saveScore)

// -- Mutable (Non-Primitive)
const shoppingCart = ['Apple', 'Milk'];
const sharedCart: string[] = shoppingCart; // mengcopy alamat memori dari shoppingCart

//tambahkan bread untuk mutate / ubah isi array

shoppingCart.push("bread")

console.log(shoppingCart)
console.log(sharedCart)


console.log("---Looping IN OBJECT---")
const laptopProduct = {
    brand: "Asus ROG",
    processor: "Intel i9",
    isAvailable: true,
};

for(const key in laptopProduct){
    const value = laptopProduct[key as keyof typeof laptopProduct]
    console.log(`property "${key}" : ${value}`)
}

console.log("---DESTRUCTIRING ASSIGNMENT---")
// langsung mengambil properti di objek / array

const userProfile = {
    username: 'johndev',
    email: 'john.dev@example.com',
    age: 26,
    city: "Jakarta",
    paymentAccount: {
        bank: "BCA",
        account: 123456
    },
}

const {username, email, age, city, paymentAccount} = userProfile;
console.log(username)
console.log(email)
console.log(age)
console.log(city)
console.log(paymentAccount.account)
console.log(paymentAccount.bank)

console.log("---SPREAD OPERATOR---")
// untuk menduplikat value dari satu object/array lain

const updatedProfile = {
    ...userProfile, // salin copyan disini
    hobbies: ["coding", "gaming"],
};

console.log('after coping userProfile: ', updatedProfile)

console.log("---INTERFACE/ TYPES---");
// secara harafiah sebenernya sama, penggunaannya yang beda
// interface --> dikhususkan untuk object utuh
// types -> dikhususkan untuk variasi data

type AuthorizationUser = "DEFAULT" | "ADMIN"
interface BaseUser {
    id: string;
    email: string;
    role: AuthorizationUser
}


const userDefault: BaseUser= {
    id: "DEF-01",
    email: "admin@example.com",
    role: "DEFAULT"
};

const userAdmin: BaseUser = {
    id: "ADMIN-01",
    email: "admin@example.com",
    role: "ADMIN"
}

console.log("---CLASS---");
// class --> sebuah struktur untuk membangun sekumpulan properti maupun method

class Vehicle {
    brand: string = "Honda Vario";
    transmission: string = "AI";
    turnedOn() {
        console.log("Vehicle starting ...");
    }
}

// cara memanggil class adalah dengan membuat instance / turunan
// instance / turunan bisa dibuat berkali-kali
const bike = new Vehicle()

console.log("Ini vehicle data type:", typeof Vehicle, "(class itu tipe data function)")
console.log("Ini vehicle data type:",typeof bike)
console.log(bike.brand);
console.log(bike.transmission);

bike.turnedOn();

console.log("---CONSTRUCTOR---");

class UserProfile {
    username: string = "";
    email: string = "";
    private password: string = "";

    constructor(username: string, email: string, password:string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    private savePassword() {
        console.log("Password was hasing ...")
    }
    

    public getInformation() {
        this.savePassword();
        console.log(`Username: ${this.username}, and email: ${email}`);
    }
}

const userJohn = new UserProfile("John Doe", "john.doe@example.com", "123");
const userBob = new UserProfile("Bob", "bob@example.com", "456");

userJohn.getInformation();
userBob.getInformation();

// console.log(userJohn.password); // tidak bisa


console.log("---INHERITANCE/PEWARISAN SIFAT---")

class Character {
    public name: string = ""
    public element: string = ""
    public hp: number = 0

    constructor(name: string, element: string, hp: number) {
        this.name = name;
        this.element = element;
        this.hp;
    }
}

class Marksman extends Character {
    constructor(name: string, element: string, hp: number) {
        super(name, element, hp) // super -> untuk menghubungkan properties di parent ke children
        this.name = name;
        this.element = element;
        this.hp = hp;
    }

    public getStatistics() {
        console.log(
            `Name: ${this.name}, element: ${this.element}, Health : ${this.hp}`,
        );
    }
}


const charA = new Marksman("Archer", "Fire", 85)
charA.getStatistics()