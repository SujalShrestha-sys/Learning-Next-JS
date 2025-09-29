import { products } from "@/app/product-data";

export default async function ProductDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const product = products.find((p) => p.id === id);

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <div>
            <h1>Product Name: {product.name}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
}
