import { products } from "@/app/product-data";
import NotFoundPage from "@/app/not-found";
import Image from "next/image";

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
        <div className="container mx-auto p-8 flex flex-col md:flex-row gap-8">
            {/* Left: Product Image */}
            <div className="md:w-1/2 flex justify-center">
                <Image
                    src={"/" + product.imageUrl}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="rounded-lg shadow-md object-cover"
                />
            </div>

            {/* Right: Product Info */}
            <div className="md:w-1/2">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-2xl text-blue-600 font-semibold mb-6">
                    ${product.price}
                </p>
                <p className=" leading-relaxed mb-8">
                    {product.description}
                </p>

            </div>
        </div>
    );
}
