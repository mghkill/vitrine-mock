import { useCartStore } from '../store/cartStore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const { items, getTotal } = useCartStore();
  const navigate = useNavigate();
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handleSendToWhatsApp = () => {
    if (!customerDetails.name || !customerDetails.address) {
      alert('Por favor, preencha seu nome e endereço.');
      return;
    }

    const productList = items
      .map(
        (item) =>
          `${item.quantity}x ${item.product.name} (Tamanho: ${item.size}) - R$${(
            item.product.price *
            (item.product.discount ? (1 - item.product.discount / 100) : 1)
          ).toFixed(2)}`
      )
      .join('\n');

    const total = getTotal().toFixed(2);
    const message = `
      Olá, gostaria de finalizar a compra com os seguintes detalhes:
      
      Cliente: ${customerDetails.name}
      Email: ${customerDetails.email || 'Não informado'}
      Endereço: ${customerDetails.address}

      Produtos:
      ${productList}

      Total: R$${total}
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5577981021633?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Finalizar Compra</h1>

      <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Detalhes do Cliente</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
            <input
              type="text"
              name="name"
              value={customerDetails.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
              placeholder="Digite seu nome completo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={customerDetails.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
              placeholder="Digite seu email (opcional)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Endereço</label>
            <input
              type="text"
              name="address"
              value={customerDetails.address}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
              placeholder="Digite seu endereço completo"
            />
          </div>
        </form>
      </div>

      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Resumo do Pedido</h2>
        <ul className="divide-y divide-gray-200 mb-6">
          {items.map((item) => {
            const price = item.product.discount
              ? item.product.price * (1 - item.product.discount / 100)
              : item.product.price;

            return (
              <li key={`${item.product.id}-${item.size}`} className="py-4 flex justify-between">
                <span>
                  {item.quantity}x {item.product.name} (Tamanho: {item.size})
                </span>
                <span>R$ {price.toFixed(2)}</span>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-gray-900">Total</span>
          <span className="text-2xl font-bold text-gray-900">R$ {getTotal().toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handleSendToWhatsApp}
        className="mt-6 w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors"
      >
        Enviar Pedido para WhatsApp
      </button>

      <button
        onClick={() => navigate('/cart')}
        className="mt-4 w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Voltar para o Carrinho
      </button>
    </div>
  );
};
