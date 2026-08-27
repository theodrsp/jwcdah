// SOAL 10: CHAINING FILTER + MAP + REDUCE

interface Product {
    nama : string,
    harga : number,
    stok : number
}

const products: Product[] = [
    { nama: "Kemeja-001", harga: 75, stok: 3},
    { nama: "Jeans-001", harga: 125, stok: 5},
    { nama: "Jeans-002", harga: 110, stok: 0},
]

// function hitungNilaiInventory(product: Product[]) {
//     const availableProduct: Product[] = product.filter((s)=> s.stok > 0)
    
//     const nilaiStok: number[] = availableProduct.map((i) => i.harga*i.stok)
    
//     const total: number = nilaiStok.reduce((accumulator, current) => accumulator + current, 0)

//     return (total)
// }

function hitungNilaiInventory(product: Product[]): number {
    return product
        .filter((s) => s.stok > 0)  // 1. Saring yang stoknya > 0
        .map((i) => i.harga * i.stok) // 2. Ubah jadi array harga * stok ([225, 625])
        .reduce((acc, curr) => acc + curr, 0); // 3. Jumlahkan semuanya (225 + 625 = 850)
}
console.log(hitungNilaiInventory (products))

// SOAL 11 (KOMBINASI BRANCHING) : Rekap Nilai Siswa
interface Student {
    nama : string,
    nilai : number
}

const dataSiswa: Student[] = [
    {nama : "Asep", nilai: 80},
    {nama : "Budi", nilai: 70},
    {nama : "Ceri", nilai: 75},
    {nama : "Dodi", nilai: 90},
    {nama : "Elis", nilai: 88},
]

function prosesNilaiSiswa(st: Student[]) {
    const siswaLulus = st.filter((i) => i.nilai >= 75) 

    const rekapGrade = siswaLulus.map(s => {
        let grade: string;
        
        if (s.nilai >= 90  && s.nilai <=100) {
            grade ='A'
        } else if (s.nilai >=80 && s.nilai <90) {
            grade = 'B'
        } else if (s.nilai >=75 && s.nilai <80) {
            grade = 'C'
        } else if (s.nilai >= 0 && s.nilai < 75) {
            grade = 'D'
        } else {
            throw new Error ("Ada yang salah dengan input nilai!")
        }

        return (`${s.nama} : ${s.nilai} ${grade}`)
    })

    const totalNilai = siswaLulus.reduce((acc,curr) => acc + curr.nilai, 0)
    const rataRata = siswaLulus.length >0 ? totalNilai / siswaLulus.length : 0

    return {
        rekapGrade,
        rataRata
    }
}

const hasil = prosesNilaiSiswa(dataSiswa)
console.log(hasil.rekapGrade);
console.log(hasil.rataRata)

// SOAL 12 (TANTANGAN): ANALISIS TRANSAKSI KEUANGAN
const transaction: number[] = [500000, -15000,20000,-50000,1000000, -300000]

interface Summary {
    totalMasuk: number;
    totalKeluar: number;
    saldoAkhir: number;
}
function analisisTransaksi(dataTransaksi: number[]) {
    const summary: Summary = dataTransaksi.reduce(
        (acc,curr) => {
            if (curr > 0) {
                acc.totalMasuk += curr;
            } else {
                acc.totalKeluar += Math.abs(curr);
            }
            acc.saldoAkhir += curr;

            return acc;
    },
    { totalMasuk: 0, totalKeluar: 0, saldoAkhir: 0} //nilai awal berupa objek kosong  
    );
    
    // cari rata-rata berdasarkan hasil reduce (total saldo / jumlah trx)
    const rataRata: number = summary.saldoAkhir /dataTransaksi.length;

    // filter trx yang nilainya diatas rata-rata
    const trxDiatasRerata: number[] = dataTransaksi.filter((t) => t > rataRata)

    return {
        ringkasanKeuangan: summary,
        rataRataTransaksi: rataRata,
        transaksiBesar: trxDiatasRerata
    }
}

console.log (analisisTransaksi(transaction))