import { create } from "zustand";
import { Product } from "../types";

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  getProductsByCategory: (category: string) => Product[];
}

// Produtos iniciais
const initialProducts: Product[] = [
  {
    id: "1",
    name: "Camiseta Esportiva Performance",
    price: 89.9,
    description:
      "Camiseta esportiva de alta performance, ideal para atividades físicas",
    imageUrl:
      "https://drive.google.com/file/d/1fB2JqUQUJPNkdLw98EAPHyOJ69Lqnx_m/preview",
    category: "esporte",
    sizes: ["P", "M", "G", "GG"],
    discount: 0,
    inStock: true,
  },
  {
    id: "2",
    name: "Casaco de Inverno Premium",
    price: 289.9,
    description: "Casaco térmico para dias frios, com acabamento premium",
    imageUrl:
      "https://drive.google.com/file/d/1fB2JqUQUJPNkdLw98EAPHyOJ69Lqnx_m/preview",
    category: "inverno",
    sizes: ["M", "G", "GG"],
    discount: 10,
    inStock: true,
  },
  {
    id: "3",
    name: "Casaco de 3",
    price: 299.9,
    description: "Casaco térmico para dias frios, com acabamento premium",
    imageUrl:
      "https://drive.google.com/file/d/1fB2JqUQUJPNkdLw98EAPHyOJ69Lqnx_m/preview",
    category: "inverno",
    sizes: ["M", "G", "GG"],
    discount: 10,
    inStock: true,
  },
  {
    id: "4",
    name: "Casaco de 2",
    price: 299.9,
    description: "Casaco térmico para dias frios, com acabamento premium",
    imageUrl:
      "https://drive.google.com/file/d/1fB2JqUQUJPNkdLw98EAPHyOJ69Lqnx_m/preview",
    category: "inverno",
    sizes: ["M", "G", "GG"],
    discount: 12,
    inStock: true,
  },
  {
    id: "5",
    name: "Casaco de Inverno Premium",
    price: 299.9,
    description: "Casaco térmico para dias frios, com acabamento premium",
    imageUrl:
      "https://drive.google.com/file/d/1fB2JqUQUJPNkdLw98EAPHyOJ69Lqnx_m/preview",
    category: "inverno",
    sizes: ["M", "G", "GG"],
    discount: 10,
    inStock: true,
  },
];

export const useProductStore = create<ProductState>((set, get) => ({
  products: initialProducts,
  setProducts: (products) => set({ products }),
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
  getProductsByCategory: (category) => {
    return get().products.filter((p) => p.category === category);
  },
}));
