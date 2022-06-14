//import { useState } from "react";
import Card from "./Card";

function Products() {
    const products = [
        { name: "vest", price: 50 },
        { name: "jacket", price: 70 },
        { name: "jumper", price: 20 },
        { name: "tshirt", price: 40 },
        { name: "necklace", price: 70 },
        { name: "shoes", price: 40 },
    ]

    return (
        <div className="product-grid">
            <div className="product-list">
                {products.map((product) => (
                    <Card name={product.name} price={product.price} />
                ))}
            </div>
        </div>
    );
}
 
export default Products;