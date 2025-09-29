"use client";
import { useState } from "react";
import { products } from "../product-data";
import Link from "next/link";
export default function CartPage() {
    const [cartIds, setCartIds] = useState(["123", "345"]);

    const cartProducts = cartIds
        .map((id) => products.find((p) => p.id === id))
        .filter((p): p is NonNullable<typeof p> => p !== undefined);

    return (
        <div>
            <h1>Shooping cart</h1>
            {cartProducts.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                cartProducts.map((product) => (
                    <Link key={product.id} href={"/products/" + product.id}>
                        <br />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <br />
                    </Link>
                )))
            }
        </div>
    );
}
