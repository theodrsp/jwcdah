// Asynchronous
console.log("[Async] Step 1: Start long fteching data process");

setTimeout(() => {
    console.log("[Async] Step 3: Data fetched successfully after 2 seconds");
}, 2000) // 2000 ms = 2s // mau 0 detik pun tetap task bawah dulu yang dieksekusi

console.log(
    "[Async] Step 2: Main thread is NOT Blocked, running other task immediately"
)