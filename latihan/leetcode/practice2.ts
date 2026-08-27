function isPalindrome(x: number): boolean {
    // saya menggunakan metode ubah ke str karena tipe data number tidak bisa pake .length / .entries
    const strX = x.toString();
    const len = strX.length;

    for (let left:number = 0; left<len; left++) {
        for (let right: number = len-1; right >=0; right--) {
            if (left+right === len-1){
                if(strX[left] !== strX[right]) {
                    return false
                }
            }

        }
    }
    
    // jika semua pasangan cocok setelah nested loop selesai
    return true
};

const x1= 121;
const x2=-121
const x3=10

console.log(isPalindrome(x1))
console.log(isPalindrome(x2))
console.log(isPalindrome(x3))

