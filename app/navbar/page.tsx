import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo / Brand */}
                <Link href="/" className="text-xl font-bold text-blue-600">
                    MyStore
                </Link>

                {/* Nav Links */}
                <div className="flex space-x-6">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                        Home
                    </Link>
                    <Link href="/products" className="text-gray-700 hover:text-blue-600 transition">
                        Products
                    </Link>
                    <Link href="/cart" className="text-gray-700 hover:text-blue-600 transition">
                        Cart
                    </Link>
                    <Link href="/checkout" className="text-gray-700 hover:text-blue-600 transition">
                        Checkout
                    </Link>
                </div>
            </div>
        </nav>
    );
}
