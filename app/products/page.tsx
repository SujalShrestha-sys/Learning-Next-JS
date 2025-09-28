import ProductList from "../productList"
import { products } from "../product-data"
export default function ProductsPage() {
    return (
        <>
        <h1>Products</h1>
        <ProductList products={products} />
        </>
    )
}