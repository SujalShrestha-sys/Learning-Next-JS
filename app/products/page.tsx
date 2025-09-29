import ProductList from "../productList"
import { products } from "../product-data"
export default function ProductsPage() {
    return (
        <>
        <ProductList products={products} />
        </>
    )
}