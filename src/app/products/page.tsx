import ProductCard from "../../../components/ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 55000, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Headphones", price: 2000, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Smartphone", price: 30000, image: "https://via.placeholder.com/200" },
];

export default function ProductsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
