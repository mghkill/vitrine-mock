import React, { useState, useEffect } from 'react';
import { Product } from '../../types';

interface ProductFormProps {
  onSubmit: (product: Product) => void;
  initialData?: Product;
  onEditSubmit?: (product: Product) => void; // Nova função de editar
}

export const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, initialData, onEditSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [sizes, setSizes] = useState(['M']);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPrice(initialData.price);
      setDescription(initialData.description);
      setImageUrl(initialData.imageUrl);
      setCategory(initialData.category);
      setSizes(initialData.sizes);
      /* setDiscount(initialData.discount); */
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = {
      id: initialData?.id || Date.now().toString(),
      name,
      price,
      description,
      imageUrl,
      category,
      sizes,
      discount,
      inStock: true,
    };
    if (onEditSubmit) {
      onEditSubmit(product);
    } else {
      onSubmit(product);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-semibold">Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Preço</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Descrição</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Imagem URL</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Categoria</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Desconto (%)</label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(parseFloat(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        {initialData ? 'Atualizar Produto' : 'Adicionar Produto'}
      </button>
    </form>
  );
};
