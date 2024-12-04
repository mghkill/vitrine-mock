import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { useProductStore } from '../store/productStore';
import { useCategoryStore } from '../store/categoryStore';

export const CategoryProducts = () => {
  const { slug } = useParams();
  const { products } = useProductStore();
  const { categories } = useCategoryStore();

  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = products.filter((p) => p.category === slug);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-600">Categoria não encontrada</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h1>
      <p className="text-gray-600 mb-8">{category.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          
          />
        ))}
      </div>
    </div>
  );
};