function romanToInt(s: string): number {
    // Buat Dictionary untuk memetakan simbol romawi ke nilai integernya
    const romanMap: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    const n = s.length;

    // loop melalui setiap karakter dalam string
    for (let i:number = 0; i<n; i++ ) {
        // cek apakah ada karakter selanjutnya dan nilainya lebih kecil dari karakter saat ini
        if (i<n-1 && romanMap[s[i]!]! < romanMap[s[i+1]!]!){
            total -= romanMap[s[i]!]!
        } else {
            total += romanMap[s[i]!]!
        }
    }
    return total;
    
}

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))