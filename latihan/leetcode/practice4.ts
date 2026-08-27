function longestCommonPrefix(strs: string[]): string {
    if (!strs || strs.length === 0) {
        return "";
    }
    
    // Urutkan array string secara alfabetis (leksikografis)
    strs.sort();
    
    // Ambil string pertama dan string terakhir setelah diurutkan
    const first = strs[0]!;
    const last = strs[strs.length - 1]!;
    
    // Bandingkan karakter demi karakter antara string pertama dan terakhir
    const minLength = Math.min(first.length, last.length);
    for (let i = 0; i < minLength; i++) {
        if (first[i] !== last[i]) {
            return first.substring(0, i); // Kembalikan potongan string sampai batas huruf yang sama
        }
    }
    
    // Jika lolos semua, berarti seluruh string pertama adalah prefix terpanjang
    return first;
}

// Contoh Penggunaan:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));     // Output: ""