let priceItem: number = 10000;
let discPriceItemBroken: number = 0.1;
const cartItem: string = "Roti Keju";

console.log("====WELCOME TO MINIMARKET====");

// const cartItemPcs= 5;
let totalPrice = 0;
for (let cartItemPcs=5; cartItemPcs>0; cartItemPcs--){
    if (cartItemPcs!=3) {
        totalPrice = totalPrice + priceItem
    } else if (cartItemPcs == 3) {
        console.log("Item " + cartItemPcs + " Kadaluarsa, kena diskon 10%")
        totalPrice = totalPrice + (priceItem-(priceItem*discPriceItemBroken))
    }
}

console.log(totalPrice)


