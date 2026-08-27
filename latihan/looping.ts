// Soal 7(Klasik): FizzBuzz

function fizzBuzz(n: number) :string[] {
    // edge case
    if (n<=0) {
        throw new Error ("Input harus diatas 0 / bilangan number!")
    } 

    if (!Number.isInteger(n)){
        throw new Error ("Input harus valid number!")
    }
    let arrResult: string[] = []; // wadah untuk menampung semua hasil

    for (let i:number = 1; i <=n; i++)  {
        if (i%3===0 && i%5===0) {
            arrResult.push("FizzBuzz")
        } else if (i%5===0) {
            arrResult.push("Buzz")
        } else if (i%3===0) {
            arrResult.push("Fizz")
        } else {
            arrResult.push(i.toString())
        }
    }
    return arrResult
}
console.log(fizzBuzz(15))

// SOAL 8 (While Loop): Simulasi Penarikan Saldo

function simulasiSaldo(saldoAwal: number, biayaAdmin: number) {
    // Edge Case
    if (saldoAwal <0 || biayaAdmin <= 0) {
        throw new Error ("Input bermasalah, periksa kembali variabel saldoAwal dan Biaya admin!")
    }
    
    console.log ("SIMULASI SALDO")
    let trxNumber: number = 1;
    while (saldoAwal >= biayaAdmin) {
        saldoAwal-=biayaAdmin;
        console.log (`Payment Admin Successfully, current saldo : ${saldoAwal}`)
        console.log(`Transaction Number : ${trxNumber}`)
        trxNumber++
    }
    if (saldoAwal < biayaAdmin) {
        console.log ("Transaction Failed! Saldo not enough to payment")
        console.log(`current saldo : ${saldoAwal}`)
    }
    
}

simulasiSaldo (300, 55)

function cariBilanganPrima(n: number) {
    let showResult: number[] = [];
    for (let i = 2; i<=n ; i++){
        let isPrime: boolean = true
        for (let j = 2; j <= Math.sqrt(i); j++){
            if (i% j === 0) {
                isPrime = false
                break;
            }
        }

        if (isPrime) {
            showResult.push(i)
        }
    }
    return showResult;
}

console.log(cariBilanganPrima(10))