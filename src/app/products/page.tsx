import ProductCard from "../../../components/ProductCard";

const products = [
  {
    id: "1", // ✅ changed to string
    name: "Laptop",
    price: 55000,
    image: "https://via.placeholder.com/200",
    slug: "laptop",
  },
  {
    id: "2", // ✅ changed to string
    name: "Headphones",
    price: 2000,
    image: "https://via.placeholder.com/200",
    slug: "headphones",
  },
  {
    id: "3", // ✅ changed to string
    name: "Smartphone",
    price: 30000,
    image: "https://via.placeholder.com/200",
    slug: "smartphone",
  },
];

export default function ProductsPage() {
  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
