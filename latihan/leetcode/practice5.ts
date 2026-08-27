function isValid(s: string): boolean {
    const stack: string[] = [];
    
    // Kamus pasangan kurung tutup dan pasangannya
    const bracketMap: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i]!;

        // Jika karakter adalah kurung tutup
        if (char in bracketMap) {
            const topElement = stack.pop(); // Ambil elemen terakhir dari stack
            // Cek apakah stack kosong atau elemen terakhir tidak cocok
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // Jika karakter adalah kurung buka, masukkan ke stack
            stack.push(char);
        }
    }

    // Jika stack kosong, berarti valid (semua berpasangan)
    return stack.length === 0;
}

// Contoh Penggunaan:
console.log(isValid("()"));     // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]"));     // Output: false
console.log(isValid("([])"));   // Output: true