import { products } from "@/app/product-data";
import NotFoundPage from "@/app/not-found";
export default async function ProductDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const product = products.find((p) => p.id === id);

    if (!product) {
        return <NotFoundPage />;
    }

    return (
        <div>
            <h1>Product Name: {product.name}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
}
