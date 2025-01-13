import { Banner } from "../components/banner/Banner";
import { ProductCard } from "../components/product/ProductCard";
import { useProductStore } from "../store/productStore";

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}
export const Home = () => {
  const { products } = useProductStore();

  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Produtos em Destaque
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
