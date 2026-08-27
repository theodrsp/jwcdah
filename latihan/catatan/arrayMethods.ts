//  ARRAY METHODS DI TYPESCRIPT (map, filter, reduce)
// 1. map() transformasi setiap elemen
// Mengembalikan array baru dengan panjang sama, tapi setiap elemen sudah "diubah" sesuai fungsi yang kamu kasih.
const angka: number[] = [1,2,3,4];
const angkadikali2: number[] = angka.map((n)=> n*2)
console.log(angkadikali2)

// Analogi: bayangkan tiap elemen array masuk ke "mesin", keluar dalam bentuk baru, tapi jumlah elemen tetap sama. 
interface User {
    nama: string;
    umur: number;
}

const users: User[] = [
    { nama: "Udin", umur: 25 },
    { nama: "Rina", umur: 17}
]

const infoUser: string[] = users.map((u) => `${u.nama} berumur ${u.umur} tahun`);
console.log(infoUser)

// 2. filter() - Menyaring Elemen
// Mengembalikan array baru yang cuma berisi elemen yang lolos kondisi (true). Panjang array bisa berkurang (atau tetap sama kalau semua lolos).
const angkaa: number[] = [1,2,3,4,5,6];
const genap: number[] = angkaa.filter((a) => a%2===0)
console.log(genap)

const dewasa: User[] = users.filter((u) => u.umur >= 17)
console.log(dewasa)

// 3. reduce() - Meringkas Jadi Satu Nilai
// Paling sering bikin bingung pemula, karena reduce bisa mengubah array jadi apa saja — angka tunggal, string, object, bahkan array lain.

const aangka: number[] = [1,2,3,4];
const total: number = aangka.reduce((accumulator, current) => {
    return accumulator + current;
    
}, 0); // 0 adalah nilai awal accumulator
console.log(total); // 10