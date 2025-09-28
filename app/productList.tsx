import { Product } from "./product-data";
import Link from "next/link";
import Image from "next/image";

export default function ProductList({ products }: { products: Product[] }) {
    return (
        <div>
            {products.map((product) => {
                return (
                    <Link key={product.id} href={"/products/" + product.id}>
                        <Image src={'/' + product.imageUrl} alt="Product image" width={150} height={150} />
                        <h2>Product Name: {product.name}</h2>
                        <p>Price: {product.price}</p>
                    </Link>
                );
            })}
        </div>
    );
}
