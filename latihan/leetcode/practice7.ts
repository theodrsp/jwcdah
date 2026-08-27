// function removeDuplicates(nums: number[]): number {
//     if (nums.length === 0) return 0;

//     let i = 0; // Pointer untuk elemen unik terakhir

//     for (let j = 1; j < nums.length; j++) {
//         // Jika menemukan angka yang berbeda dengan elemen unik terakhir
//         if (nums[j] !== nums[i]) {
//             i++;              // Geser pointer i
//             nums[i] = nums[j]; // Timpa elemen di posisi i dengan elemen unik baru
//         }
//     }

//     // Mengembalikan jumlah elemen unik (k)
//     return i + 1;
// }
// const nums = [1,1,2];
// const k = removeDuplicates(nums);

// console.log("Jumlah unik (k):", k);                  // Output: 2
// console.log("Array termodifikasi:", nums.slice(0, k)); // Output: [0, 1, 2]


// const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const k2 = removeDuplicates(nums2);

// console.log("Jumlah unik (k):", k2);                  // Output: 5
// console.log("Array termodifikasi:", nums2.slice(0, k2)); // Output: [0, 1, 2, 3, 4]