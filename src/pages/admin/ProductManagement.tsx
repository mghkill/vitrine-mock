import React, { useState } from 'react';
import { ProductForm } from '../../components/admin/ProductForm';
import { useProductStore } from '../../store/productStore';
import { Product } from '../../types';
import { Pencil, Trash2 } from 'lucide-react';

export const ProductManagement = () => {
  const { products, addProduct, removeProduct } = useProductStore();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct = {
      ...productData,
      id: Date.now().toString(),
    };
    console.log(newProduct)
    addProduct(newProduct);
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      removeProduct(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {editingProduct ? 'Editar Produto' : 'Adicionar Novo Produto'}
          </h2>
          <ProductForm
            onSubmit={handleAddProduct}
            initialData={editingProduct || undefined}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lista de Produtos</h2>
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-gray-600">R$ {product.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingProduct(product)}
                    className="p-2 text-blue-600 hover:text-blue-800"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="p-2 text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};