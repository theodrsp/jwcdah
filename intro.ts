let word: string ="Hello TypeScript";
// word = 20 Type 'number' is not assignable

let count: number = 15
let isActive: boolean = true
let vehicle: {brand: string, year: number} = {
    brand : "Toyota",
    year : 2021
};

let devices: [string,string,string] = ["Apple", "Samsung", "Oppo"]

let years:number[] = [1999, 1998, 1996, 2001, 2002]

// [string, string, string] itu hanya boleh diisi 3 string
// number[] boleh dinamis, tapi harus diisi number

// -- STRING BUILT IN METHOD
// Slice : untuk mengambil sebagian teks atau isi array tanpa mengubah data
// trim : untuk menghapus spasi yang tidak dibutuhkan baik di awal maupun akhir
// concat : untuk menggabungkan dua atau lebih teks/array menjadi satu

let fullTitle: string = "Fullstack Developer";
let category:string = fullTitle.slice(0,9);
console.log("SLICE : ", category);

let dirtyEmail: string = " user@gmail.com ";
let cleanEmail:string = dirtyEmail.trim();

console.log("TRIM (Sebelum):", dirtyEmail);
console.log("TRIM (setelah):", cleanEmail);

let firstName: string = "Timotius";
let lastName: string = "Theodearson";

let fullName: string = firstName.concat(" ", lastName);
console.log("CONCAT : ", fullName);

// tipe data bisa diisi lebih dari satu jenis

let uniqueData: string | number = "2005";


// NUMBER BUILT IN METHOD
let uniqueNumber: number = 8.5;

console.log(parseInt(uniqueNumber.toFixed(0)))

let numA: number = 10
let numB: number = 3

let sum: number = numA + numB
let multiplication: number = numA * numB
let division: number = numA /numB
let modulo: number = numA % numB
let exponent: number = numA ** numB; 

console.log(sum)
console.log(multiplication)
console.log(division)
console.log(modulo)
console.log(exponent)

// INC & DCRMNT
let specialNumber: number = 5;
specialNumber++;
console.log(specialNumber)
specialNumber--;
console.log(specialNumber)


// POSTFIX -> cetak nilai x dulu (10), baru x bertambah jadi 11 di memori
let x: number = 10;
console.log("Postfix(x++) : ", x++);
console.log("Nilai x sekarang : ", x)

let y:number = 10
// PREFIX -> tambahkan y dulu jadi 11, baru cetak nilai barunya (11)
console.log("Postfix(++y) : ", ++y);
console.log("Nilai y sekarang : ", y)