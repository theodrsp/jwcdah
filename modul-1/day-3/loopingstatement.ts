// --LOOPING STATEMENT
// --for: perulangan untuk bilangan yang sudah diketahui

console.log("skenario: menaiki anak tangga yang jumlahnya ada 5 dengan step 2")
for (let step: number = 1; step <=5; step+=2) {
    console.log("Naik tangga ke - ", step);
}

console.log("\nNested Looping Skenarion")
for (let x: number =1; x<6; x++) {
    console.log("first section : ", x);
    for (let y:number = 1; y<4; y++) {
        console.log(" --- second section : ", y)
    }
}

// WHILE STATEMNT
console.log ("While: perulangan untuk bilang yang belum diketahui (menggunakan patokan true / false dalam actionnya!")

// skenario: mengisi baterai HP dari kondisi saat ini sampai penuh (100%)
let batteryLevel: number = 90;

while(batteryLevel <100) {
    batteryLevel++
    console.log("charging .. Battery Level : ", batteryLevel)
}

console.log("fully charged")

// Nested While 
// Skenario: Membersihkan 2 piring kotor sampai bersih total
let dirtyPlatesLeft: number =2;

while (dirtyPlatesLeft > 0) {
    console.log("Taking plate number " + dirtyPlatesLeft + "from sink");
    
    let scrubCount: number = 0; // jumlah gosokan sabun per batang
    let isClean: boolean = false

    // gosok piring minimal 3x gunakan sampai bersih
    while(!isClean) {
        scrubCount++
        console.log("Scrubbing plate ..("+scrubCount+" time");
        if (scrubCount >= 3) {
            isClean = true;
            console.log("Plate is clean!");
        }
    }

    --dirtyPlatesLeft; //piring selesai, lanjut ke piring berikutnya
}

console.log("All plates washed successfully")