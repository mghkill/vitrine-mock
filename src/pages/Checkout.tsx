import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CustomerDetails {
  name: string;
  email: string;
  address: string;
}

export const Checkout: React.FC = () => {
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: "",
    email: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const products: Product[] = [
    { id: 1, name: "Produto 1", price: 50 },
    { id: 2, name: "Produto 2", price: 30 },
  ];

  const total = products.reduce((sum, product) => sum + product.price, 0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = () => {
    if (!customerDetails.name || !customerDetails.email || !customerDetails.address) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    if (!paymentMethod) {
      alert("Por favor, selecione um método de pagamento.");
      return;
    }
    alert("Compra finalizada com sucesso!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Finalizar Compra</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Detalhes do Cliente */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Seus Detalhes</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                value={customerDetails.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Digite seu email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Endereço</label>
              <textarea
                name="address"
                value={customerDetails.address}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows={3}
                placeholder="Digite seu endereço completo"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Resumo do Pedido */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Resumo do Pedido</h2>
          <div className="bg-white shadow rounded-lg p-6 space-y-4">
            {products.map((product) => (
              <div key={product.id} className="flex justify-between items-center">
                <p className="text-sm text-gray-700">{product.name}</p>
                <p className="text-sm font-medium text-gray-900">
                  R$ {product.price.toFixed(2)}
                </p>
              </div>
            ))}
            <div className="flex justify-between items-center font-semibold text-gray-900">
              <p>Total</p>
              <p>R$ {total.toFixed(2)}</p>
            </div>
          </div>

          {/* Método de Pagamento */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Método de Pagamento</h3>
            <form className="space-y-4">
              <div className="flex items-center">
                <input
                  id="credit-card"
                  name="payment-method"
                  value="credit-card"
                  type="radio"
                  onChange={handlePaymentChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="credit-card" className="ml-3 block text-sm font-medium text-gray-700">
                  Cartão de Crédito
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paypal"
                  name="payment-method"
                  value="paypal"
                  type="radio"
                  onChange={handlePaymentChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
                  PayPal
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="pix"
                  name="payment-method"
                  value="pix"
                  type="radio"
                  onChange={handlePaymentChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="pix" className="ml-3 block text-sm font-medium text-gray-700">
                  Pix
                </label>
              </div>
            </form>
          </div>

          {/* Botão Finalizar Compra */}
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-6 w-full bg-indigo-600 text-white font-medium py-3 rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};
