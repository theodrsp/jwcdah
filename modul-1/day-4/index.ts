// array with object --> menggunakan interface
// interface -> penulisannya menggunakan PascalCase

interface UserProduct {
    productId: string;
    productName: string;
    price: number;
    isAvailable: boolean
}

// deklarasi array of objects
const shoppingCartItems : UserProduct[] = [
    {
        productId: "PROD-01",
        productName: "Wireless Mouse",
        price: 1500,
        isAvailable: true
    },
    {
        productId: "PROD-02",
        productName: "Wireless Keyboard",
        price: 1500,
        isAvailable: true
    },
];

console.log("isi keranjang belanja keseluruhan : ", shoppingCartItems)

// ARRAY LOOPING
console.log("---ARRAY LOOPING---")
// for of -> melakukan looping langsung pada nilai elemen dari sebuah Array, kita tidak perlu mikirin index

// skenario: mengirim email notifikasi ke user
const customerEmail: string[] = [
    "budi@gmail.com",
    "siti@yahoo.com",
    "andi@gmail.com"
];

// ambil nilai email satu per satu (Untuk mendapat Value saja)
for (const email of customerEmail) {
    console.log(`sending promotion email : ${email}`)
}

// skenario: menghitung total belanjaan
const itemPrices: number[] = [15000, 30000, 50000]
let totalAmount: number = 0

for (const price of itemPrices) {
    totalAmount += price // totalAmount = totalAmount + price

}
console.log(`Total Payment: Rp ${totalAmount}`);


// for each --> method bawaan array yang menerima sebuah callback function
const fruits: string[] = ["Apple", "Orange", "Banana"]

fruits.forEach((fruit, index, arr) => {
    console.log(index + " : " + fruit + " in " + arr)
});

// map --> seperti for each, bedanya hanya digunakan untuk mengubah / transform data
// perbedaan for each dan map:
const originPrices: number[] = [10000, 20000, 30000]

const forEachResult = originPrices.forEach((price) => {
    return price * 2
});
const mapResult = originPrices.map((price) => {
    return price *2
})

console.log("hasil forEach :", forEachResult); // hasil pasti undefined karena fungsinya untuk ngedispplay saja
console.log("Hasil map: ", mapResult); //-->[2000,4000,6000]

console.log("---PUSH, POP, UNSHIFT, SHIFT ---");
// push -> tambah elemen di belakang
// pop --> menghapus elemen terakhir di belakang
// unshift --> nambah elemen di depan 
// shift --> hapus elemen pertama di depan

// skenario: manajemen menu MBG
const mbgMenuItems: string[] = ["Nasi Putih", "Ayam Goreng", "Tempe Orek"];
console.log("Initial Menu: ", mbgMenuItems);

// 1. PUSH, menambahkan 'susu' di ujung akhir
mbgMenuItems.push("Susu UHT")
console.log("After PUSH (Susu UHT) : ", mbgMenuItems)

// 2. POP, menghapus menu ujung akhir elemen 
mbgMenuItems.pop()
console.log("After POP (Susu UHT): ", mbgMenuItems);

// 3. UNSHIFT, menambahkan "Buah Pisang" di ujung depan elemen
mbgMenuItems.unshift("Buah Pisang")
console.log("After Unshift(buah pisang) : ", mbgMenuItems);

// 4. SHIFT, menghapus menu ujung depan elemen ("Buah Pisan, misalnya dibagikan")
mbgMenuItems.shift()
console.log("After SHIFT(Buah Pisang) : ", mbgMenuItems)


