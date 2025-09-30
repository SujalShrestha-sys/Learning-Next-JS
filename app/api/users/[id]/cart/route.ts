import { NextRequest } from "next/server";
import { products } from "@/app/product-data";

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
    '1': ['123', '234'],
    '2': ['345', '456'],
    '3': ['234'],
}

type Params = {
    id: string;
}

export async function GET(request: NextRequest, { params }: { params: Promise<Params> }) {
    const { id: userID } = await params;
    const productIds = carts[userID] || [];

    const cartProducts = productIds.map(id => products.find(p => p.id === id));

    return new Response(JSON.stringify(cartProducts), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}