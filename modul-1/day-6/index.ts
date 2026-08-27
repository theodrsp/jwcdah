// Time Complexity -> mengukur seberapa banyak langkah komputasi
// Space Complexity -> mengukur seberapa banyaj memori tambahan yang dikonsumsi

// --Constant Time
// --> kebutuhan waktu atau memori selalu tetap
function getFirstCustomer(queueList: string[]) {
    return queueList[0] // hanya bisa melakukan 1 langkah komputasi langsung ke index 0
}

const queue: string[] = ["Alice", "Bob", "Charlie", "David"];
const nextCustomer: string | undefined  = getFirstCustomer(queue);

console.log(`[1.] Cek Elemen Pertama Antrian (Time Complexity - 0(1): ${nextCustomer})`);

// 2. Membuat Laporan Ringkasan Status Penjualan
function createStoreStatusReport(totalSales:number) {
    const report = {
        status: totalSales > 100 ? "Target Achieved" : "Needs Imrovement",
        total: totalSales,
    };

    return report;
}


const currentReport = createStoreStatusReport(150);

console.log("[2.] Membuat Laporan Ringkasan Status Penjualan (Space Complexity - 0(1)", currentReport,);

// Linear Search
// -> Metode Pencarian paling dasar yang bekerja dengan cara periksa setiap elemen satu per satu secara berurutan
function findGuestSeat(guestList: string[], targetName: string) {
    for (let i: number = 0; i<guestList.length; i++) {
        if(guestList[i] === targetName) {
            return i; // ditemukan pada nomor meja (index)
        }
        return -1; 
    }
}

// 3. Menentuka Kursi Pengunjung]
const reservation: string[] = ["Budi", "Siti", "Dewi", "Eko", "Rian"];

// best case 0[1] -"Budi" ada di urutan pertama
const seatBudi = findGuestSeat(reservation, "Budi");

// worst cae 0(n) - "Rian" ada di paling akhir atau "Zaki" tidak ditemukan
const seatRian = findGuestSeat(reservation, "Rian");
const seatZaki = findGuestSeat(reservation, "Zaki");

console.log("[3.] Linear Search")
console.log("-------[A] Seat Budi: ", seatBudi)
console.log("-------[B] Seat Rian: ", seatRian)
console.log("-------[A] Seat Zaki: ", seatZaki)

// Binary Search 
//  cari contoh di google, kurang lebih seperti cari jarum di sebuah kereta. Kalau sudah pasti gaada, buang gerbongnya.

// Bubble Sort (Boros Memori)



