import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/productStore";
import { useCartStore } from "../store/cartStore";
import { ShoppingCart } from "lucide-react";

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useProductStore();
  const addItem = useCartStore((state) => state.addItem);
  const [selectedSize, setSelectedSize] = useState("");

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-gray-600">Produto não encontrado</p>
      </div>
    );
  }

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho");
      return;
    }

    addItem({
      product,
      quantity: 1,
      size: selectedSize,
    });

    navigate("/cart");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="iframe-container" style={{ position: "relative" }}>
          <iframe
            style={{ pointerEvents: true ? "none" : "auto" }}
            src={product.imageUrl}
            width="100%"
            height="480"
            allow="autoplay"
          ></iframe>
          {/* Camada invisível para bloquear interações no mobile */}
          {true && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "transparent",
              }}
            ></div>
          )}
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">Preço:</h2>
            <div className="flex items-center space-x-2">
              {product.discount ? (
                <>
                  <span className="text-2xl font-bold text-gray-900">
                    R$ {discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    ({product.discount}% OFF)
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-gray-900">
                  R$ {product.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">
              Tamanhos disponíveis:
            </h2>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? "border-blue-600 bg-blue-50 text-blue-600"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full py-3 px-8 flex items-center justify-center space-x-2 rounded-md ${
              product.inStock
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCart className="h-5 w-5" />
            <span>
              {product.inStock
                ? "Adicionar ao Carrinho"
                : "Produto Indisponível"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
