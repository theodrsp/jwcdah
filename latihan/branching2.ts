// Soal 4 (Switch Case): Jumlah Hari dalam Bulan

let yearInput: number = 2000;
let monthInput: number = 2;

function totalDayOnMonth(month: number, year: number) {
    // edge case
    if (month > 12 || month <1) {
        throw new Error ("Month Number Invalid!")
    }
    if (year <0) {
        throw new Error ("Year Number Invalid!")
    }
    
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return "31 days"
        case 4:
        case 6:
        case 9:
        case 11:
            return "30 days"
        case 2:
            if (year%4 === 0 ){
                if (year%100!==0){
                    return "29 days (kabisat)"
                } else if (year%100===0 && year%400!==0){
                    return "28 days (No Kabisat)"
                } else if (year%100===0 && year%400 === 0) {
                    return "29 days (kabisat)"
                }
            } else {
                return "28 days"
            }
    default : throw new Error ("Month input is not valid!")
    }
}

console.log (totalDayOnMonth(monthInput, yearInput))

// SOAL 5 (Nested If Else): Sistem Permission
// roleAccount -> //admin/editor/viewer


function checkPermission (role: string, action:string, isLoggedIn: boolean){
    //pengecekan status loggenIn
    if (isLoggedIn === true) {
        // console.log ("Akun terdeteksi sudah login!");
        //pengecekan role
        switch(role) {
            case "admin":
                return(`Izinkan Semua Action, termasuk, ${action}!`);
            case "editor":
                if (action === "edit" || action === "view") {
                    return("Diizinkan");
                } else {
                    return("Ditolak, editor tidak boleh " + action);
                }
            case "viewer":
                if (action === "view"){
                    return(`Akses ${action} diizinkan`);
                } else if (action === "edit" || action ==="delete") {
                    return(`Akses ${action} tidak diizinkan`);
                } else {
                    throw new Error("Pilihan tidak dikenali!")
                }
            default: return("Hanya visitor")
        }
    } else if (isLoggedIn === false){
        return("Akses ditolak anda harus masuk login terlebih dahulu")
    } else {
        throw new Error ("Tipe data input tidak match!")
    }
}


console.log (checkPermission("admin", "edit", false))
console.log(checkPermission("admin","delete", true))
console.log(checkPermission("editor","edit", true))
console.log(checkPermission("viewer", "view", true))

//  SOAL 6 (KOMBINASI Switch True)

function hitungDiskon(totalBelanja: number, isMember: boolean): string {
    let diskonBelanja: number = 0
    let diskonMember: number = 0
    let totalPriceAfterDiscount: number = 0
    // Edge Case
    if (totalBelanja <= 0) {
        throw new Error ("Entri cart masih kosong! Silahkan masukkan barang terlebih dahulu!")
    }
    if (typeof isMember !== "boolean") {
        throw new Error("Input Bukan Boolean")
    }
    
    switch(true){
        case totalBelanja <100000:
            diskonBelanja = 0.05
            break;
        case totalBelanja >= 100000 && totalBelanja <500000:
            diskonBelanja = 0.10
            break;
        case totalBelanja >= 500000 && totalBelanja <1000000:
            diskonBelanja = 0.15
            break;
        case totalBelanja >= 1000000:
            diskonBelanja = 0.20
            break;
    }
    if (isMember === true) {
        diskonMember = 0.05
    } else if (isMember !== false) {
        diskonMember = 0
    }
    
    totalPriceAfterDiscount = totalBelanja - ((totalBelanja*diskonBelanja) + (totalBelanja*diskonMember))
    return(`totalBelanja: ${totalBelanja}\nDiskon Belanja: ${diskonBelanja}\nDiskon Member: ${diskonMember}\n ${totalPriceAfterDiscount}`)

}


console.log(hitungDiskon(120000,true))
console.log(hitungDiskon(120000,false))
console.log(hitungDiskon(250000,true))
console.log(hitungDiskon(500000,true))
console.log(hitungDiskon(700000,false))


