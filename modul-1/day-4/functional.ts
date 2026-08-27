console.log("---FUNTIONAL STATE--")

// totalPrice dan disconPercentage adalah parameter dari calculateDiscountPrice
function calculatedDiscountPrice(
    totalPrice: number,
    discountPercentage: number,
) {
    const discountAmount: number = (totalPrice*discountPercentage) / 100;
    const finalPrice: number = totalPrice - discountAmount;
    return finalPrice; // mengembalikan hasil perhitungan ke luar function
}

// buat dulu argumennya
const itemPrice: number = 200000;
const promoDiscount: number = 15; // diskon 15%

// memanggil fungsi dan menyimpan hasilnya ke dalam variabel
const finalAmountToPay: number = calculatedDiscountPrice(
    itemPrice,
    promoDiscount,
);

console.log(`Total yang harus dibayar: Rp ${finalAmountToPay}`)


// bedanya pake console.log dan return
function sumCountOne(x: number, y: number) {
    return x+y;
}

function sumCountTwo(x: number, y: number) {
    console.log(x+y)
}

console.log("hasil sumCount dengan return ditambah 10", sumCountOne(5,5) + 10)

console.log("")
sumCountTwo(30,2)

// -- default parameter -> kita bisa memberikan nilai awal ke parameter
function multiply(a: number, b: number =2) {
    return a+b;
}

console.log(multiply(5))
console.log(multiply(5,7))

// rest parameter -> satu parameter bisa digunakan untuk banyak argumen
// skenario: menampung semua harga barang

function calculateCashierReceipt(customerName: string, ...itemPrices:number[]) {
    let totalBill: number = 0

    // itemPrices harus dilooping untuk mencari total
    for (const price of itemPrices) {
        totalBill += price
    }

    console.log(`Receipt generate for ${customerName}`);
    return totalBill;
};

// output 1: pembeli budi cuma beli 2 barang
const totalBudi: number = calculateCashierReceipt("Budi", 5000, 12000);
console.log(`Total Budi : Rp ${totalBudi}`);

// output 2: pembeli siti beli 7 barang
const totalSiti: number = calculateCashierReceipt("Budi", 5000, 12000,7500,8500,3000, 4000,5000);
console.log(`Total Siti: Rp ${totalSiti}`)

console.log(" --- CLOSURE FUNCTION ---")
// closure --> mengembalikan sebuah function lain dengan cara mengingatnya
function greeting(name: string) {
    const defaultMessage: string = "Hello";

    return function() {
        return defaultMessage + name;
    };
}

const greetingBudi = greeting("Budi");
const greetingSiti = greeting("Siti")

console.log(greetingBudi());
console.log(greetingSiti());

// currying -> teknik mengubah fungsi yang tadinya menerima banyak parameter sekaligus f(a,bc_
// dipecah menjadi fungsi berantai yang masing" menerima satu parameter secara bertahap)

function multiplier(factor: number) {
    return function (number: number){
        return number * factor;
    };
}

console.log(multiplier(5)(3));
console.log(multiplier(10)(3));

const mul3 = multiplier(3);
const mul5 = multiplier(5);

console.log(mul3(5));
console.log(mul5(5));


// Recursive : teknik function yang memanggil dirinya sendiri sampai base case terpenuhi
function startCountDown(secondsLeft: number) {
    // Base case : Kondisi Berhenti
    if (secondsLeft <= 0) {
        console.log("Promo Flash Sale Dimulai!");
        return;
    }

    console.log(`Promo dimulai dalam ${secondsLeft} detik ...`);

    // recursive step: memanggil dirinya sendiri dengan data yang mengecil
    startCountDown (secondsLeft-1);
}

startCountDown(3)