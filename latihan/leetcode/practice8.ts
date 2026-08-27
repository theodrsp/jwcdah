function removeElement(nums: number[], val: number): number {
    let k = 0; // Pointer

    for (let i = 0; i < nums.length; i++) {
        // Jika elemen saat ini bukan nilai yang harus dihapus
        if (nums[i] !== val) {
            nums[k] = nums[i]!;
            k++;
        }
    }

    return k;
}

// Contoh Penggunaan:
const numsArr = [0, 1, 2, 2, 3, 0, 4, 2];
const valNum = 2;
const kResult = removeElement(numsArr, valNum);

console.log("k:", kResult); // Output: 5
console.log("Array:", numsArr.slice(0, kResult)); // Output: [0, 1, 3, 0, 4] (atau urutan lain yang valid)