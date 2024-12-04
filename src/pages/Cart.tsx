import { useCartStore } from '../store/cartStore';
import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Seu carrinho está vazio</h2>
          <p className="text-gray-600 mb-8">Adicione alguns produtos para começar suas compras.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Continuar Comprando
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Seu Carrinho</h1>
      
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {items.map((item) => {
            const price = item.product.discount
              ? item.product.price * (1 - item.product.discount / 100)
              : item.product.price;

            return (
              <li key={`${item.product.id}-${item.size}`} className="p-6 flex items-center">
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                
                <div className="ml-6 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">{item.product.name}</h3>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <p className="mt-1 text-sm text-gray-500">Tamanho: {item.size}</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    R$ {price.toFixed(2)}
                  </p>
                  
                  <div className="mt-4 flex items-center space-x-4">
                    <button
                      onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <MinusCircle className="h-5 w-5" />
                    </button>
                    <span className="text-gray-600">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <PlusCircle className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-8 bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-gray-900">Total</span>
          <span className="text-2xl font-bold text-gray-900">
            R$ {getTotal().toFixed(2)}
          </span>
        </div>
        
        <button
          onClick={() => navigate('/checkout')}
          className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};