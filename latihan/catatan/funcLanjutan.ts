// 1. DEFAULT PARAMETER
// Aturan penting: parameter dengan default value harus diletakkan setelah parameter wajib
function sapa (nama: string, sapaan:string = "Hello"): string {
    return `${sapaan}, ${nama}`
}

console.log (sapa("Udin"))
console.log(sapa("Budi", "Good Morning"))

// 2. REST PARAMETER
// Untuk menerima jumlah argumen yang tidak pasti, dikumpulkan jadi satu array
function jumlahkanSemua(...angka: number[]) : number {
    return angka.reduce((acc,curr) => acc + curr, 0)
}

console.log(jumlahkanSemua(1,2,3))
console.log(jumlahkanSemua(1,2,3,4,5))

// Bisa dikombinasikan dengan parameter biasa (rest harus di posisi terakhir):

function buatLaporan(judul: string, ...isi: string[]): string {
    return `${judul}:\n${isi.join("\n")}`;
}
const isian :string[] = ["klm", "def", "efg"];
console.log(buatLaporan("Davinci Code", ...isian))

// bisa juga seperti ini
// console.log(buatLaporan("Davinci Code", "klm", "def", "efg"))

// 3. ARROW FUNCTION vs FUNCTION DECLARATION
// Beda paling krusial: cara mereka menangani this

// function declaration: 'this' tergantung CARA dipanggil
// function biasa() {
//     console.log(this);
// }

// Arrow function: 'this' mengikuti scope dimana ia ditulis (lexical this)
// const arrow = () => {
//     console.log(this)
// }

// Contoh kasus nyata yang sering bikin bug pemula - di dalam class/object:
class Counter {
    count: number = 0;
    
    // [X] Function biasa: 'this' bisa hilang konteksnya kalau dipake sebagai callback
    incrementBiasa() {
        setTimeout(function () {
            // this disini BUKAN instance Counter lagi!
        }, 1000)
    }

    // [V] Arrow Function: 'this' tetap merujuk ke instance Counter
    incrementArrow = () => {
        setTimeout(() => {
            this.count++; // aman, 'this' tetap counter
        }, 1000);
    };

    // Untuk sekarang, cukup ingat: arrow function lebih aman dipakai sebagai callback (didalam .map(), .filter(), event handler, dll) karena tidak "kehilangan" konteks this-nya.

}

// 4. OPTIONAL PARAMETERS
// parameter yang boleh tidak diisi sama sekali (beda dengan defult - optional tidak kasih nilai otomatis, cuma jadi undefined).

function buatProfil(nama: string, umur?: number): string {
    if (umur === undefined) {
        return `Nama: ${nama}, umur tidak diisi`;
    }
    return `Nama: ${nama}, Umur: ${umur}`;
}

console.log(buatProfil("Badang", 7))
console.log(buatProfil("Badur"))

// Aturan sama seperti default params: parameter optional harus diposisi setelah parameter wajib

// 5. READONLY PARAMETER (UNTUK OBJECT/ARRAY)
// Mencegah parameter (biasanya array atau obejct) diubah secara tidak sengaja di dalam function.
function tampilkanData (data: readonly number[]): void {
    console.log(data);
    // data.push (99); // [X] Error! readonly tidak boleh dimodifikasi
}

// Ini kebiasaan bagus untuk function yang seharusnya cuma membaca, bukan data yang di passing

// 6. FUNCTION OVERLOADING (DASAR)
// Mendefinisikan beberapa signature untuk function yang sama, tergantung tipe/jumlah argumen yang di passing,

function proses(inputs: string): string;
function proses(inputs: number): number;
function proses(inputs: string | number): string | number{
    if (typeof inputs === "string") {
    return inputs.toUpperCase();
    }
    return inputs * 2;
}

console.log(proses("halo")) //"HALO"
console.log(proses(5)) // 10
