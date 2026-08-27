import { printProduct } from "./testFunction";
import products from "./dummy/product.json";

export interface Product {
    id: string;
    name : string;
    stock : number;
}

const product: Product[] = products.data;
printProduct(product)