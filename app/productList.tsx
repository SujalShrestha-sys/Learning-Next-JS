import { Product } from "./product-data";
import Link from "next/link";
import Image from "next/image";

export default function ProductList({ products }: { products: Product[] }) {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Our Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="border rounded-lg shadow-sm hover:shadow-md transition bg-white p-4 flex flex-col items-center"
                    >
                        <Image
                            src={"/" + product.imageUrl}
                            alt={product.name}
                            width={150}
                            height={150}
                            className="rounded-md mb-4"
                        />
                        <h2 className="text-lg text-slate-700 font-semibold ">{product.name}</h2>
                        <p className="text-gray-600">${product.price}</p>
                        <span className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                            View Details
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
