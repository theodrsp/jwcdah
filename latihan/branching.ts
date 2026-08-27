// SOAL 1: KATEGORI BMI
function hitungBMI(berat: number, tinggiCm: number) {
    // edge case:
    if (berat<=0 || tinggiCm <= 0) {
        throw new Error("Input tidak valid")
    }
    
    let tinggiM = tinggiCm/(10**2)

    let BMI: number = (berat/(tinggiM*tinggiM));
    let status : string;
    if (BMI < 18.5 ) {
        status = "Underweight"
    } else if (BMI >= 18.5 && BMI < 25) {
        status = "normal"
    } else if (BMI >= 25 && BMI < 30) {
        status = "Overweight"
    } else {
        status = "Obese"
    }
    return (`${BMI.toFixed(2)} ${status}`)
}
// Memanggil function
console.log(hitungBMI(72,165))

// SOAL 2 VALIDASI LOGIN SEDERHANA
const usernameRegis: string = "Udin";
let passwordRegis: string = "12345678"
function cekLogin(usernameInput: string, passwordInput: string) {
    if (usernameInput=="") {
        throw new Error("Username wajib diisi") 
    }
    if (passwordInput.length<8) {
        throw new Error ("Password minimal 8 karakter")
    }
    
    if (usernameInput === usernameRegis && passwordInput === passwordRegis) {
        return ("Login Berhasil!")
    } else {
        return ("Login Gagal! Username / Password Salah!")
    }
}

console.log(cekLogin("Udin", "12345678"))

// SOAL 3: TYPE NARROWING
function prosesInput (data:string | number | boolean) {
    if (typeof data === "string") {
        data = data.toUpperCase()
        return (`${data} -->karena merupakan tipe data string sehingga jadi uppercase`)
    } else if (typeof data === "number") {
        data= data*2
        return (`${data} -->karena merupakan tipe data number sehingga hasilnya adalah input dikali dua`)
    } else if (typeof data === "boolean") {
        data = !data
        return (`${data} -->karena merupakan tipe data boolean sehingga hasil menjadi negasi dari data boolean yang diinput`)
    }
}

console.log(prosesInput("Badak"))
console.log(prosesInput(3.14))
console.log(prosesInput(true))