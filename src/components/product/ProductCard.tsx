import { Link /* useNavigate */ } from "react-router-dom";
import { Product } from "../../types";
/* import { useCartStore } from "../../store/cartStore"; */

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  /*   const addItem = useCartStore((state) => state.addItem); */

  /*   const navigate = useNavigate(); */
  /*   const handleAddToCart = () => {
    addItem({
      product,
      quantity: 1,
      size: product.sizes[0], // Adiciona com o primeiro tamanho disponível
    });
  }; */

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/produto/${product.id}`}>
        <div
          className="iframe-container"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <iframe
            src={product.imageUrl}
            width="100%"
            height="480"
            frameBorder="0"
            style={{
              pointerEvents: "none",
              border: "none",
            }}
          ></iframe>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/produto/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            R$ {product.price.toFixed(2)}
          </span>
          <Link
            to={`/produto/${product.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Detalhes do Produto
          </Link>
        </div>
      </div>
    </div>
  );
};
