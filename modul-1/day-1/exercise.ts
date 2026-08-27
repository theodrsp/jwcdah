const angleA: number = 80
const angleB: number = 65

const angleC: number = 180-(angleA +angleB)
console.log(angleC)

// task 2 : Konversi hari
const totalDays: number = 400

const years: number = Math.floor(totalDays / 365)
const remainingDaysAfterYears: number = totalDays % 365

const months: number = Math.floor(remainingDaysAfterYears / 30)

const days: number = remainingDaysAfterYears % 30;

console.log(
    `${totalDays} days --> ${years}year, ${months} month, ${days} days`,
)

// task 3

const date1: Date = new Date("2022-01-20")
const date2: Date = new Date("2022-01-22")

// hitung selisih
const differenceMiliseconds: number = date2.getTime() - date1.getTime()

// konversi milidetik ke hari
const differenceinDays: number = differenceMiliseconds / (1000*3600 *24);
console.log(differenceinDays)