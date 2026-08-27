// PROMISE
// untuk handle keadian success /failed

// 1. sistem pengecekan stok & pembelian barang (Handling ketika success dan gagal)

interface Product {
    id: string;
    name: string;
    stock: number;
}

function checkStockAndBuy(product: Product, quantity: number) {
    // resolve -> parameter untuk handle kejadian success
    // reject -> parameter untuk handle kejadian gagal

    return new Promise((resolve, reject) => {
    setTimeout(() => {
            // logic pengecekan stok
            if (product.stock >= quantity) {
                resolve(`Success purchasing ${quantity} unit(s) of ${product.name}`)
            } else {
                reject(
                    `Out of stock! Only ${product.stock} unit(s) left for ${product.name}`
                );
            }
        }, 1500)
    });
}

const laptop: Product = {
    id: "LA-001",
    name: "Macbook Pro",
    stock: 2,
};

// Example 1: Success Case
checkStockAndBuy(laptop, 1)
.then((message) => console.log("Result Success: ", message))
.catch((error) => console.log("Result Failed" , error))
.finally(() => console.log("Done ..."));

// Example 1: Failed Case
checkStockAndBuy(laptop, 2)
.then((message) => console.log("Result Success: ", message))
.catch((error) => console.log("Result Failed" , error))
.finally(() => console.log("Done ..."));