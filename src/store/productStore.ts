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
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800",
    category: "esporte",
    sizes: ["P", "M", "G", "GG"],
    discount: 0,
    inStock: true,
  },
  {
    id: "2",
    name: "Casaco de Inverno Premium",
    price: 299.9,
    description: "Casaco térmico para dias frios, com acabamento premium",
    imageUrl:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800",
    category: "inverno",
    sizes: ["M", "G", "GG"],
    discount: 10,
    inStock: true,
  },
  {
    id: "2",
    name: "Casaco de Inverno Premium",
    price: 299.9,
    description: "Casaco térmico para dias frios, com acabamento premium",
    imageUrl:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800",
    category: "inverno",
    sizes: ["M", "G", "GG"],
    discount: 10,
    inStock: true,
  },
  {
    id: "2",
    name: "Casaco de Inverno Premium",
    price: 299.9,
    description: "Casaco térmico para dias frios, com acabamento premium",
    imageUrl:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800",
    category: "inverno",
    sizes: ["M", "G", "GG"],
    discount: 10,
    inStock: true,
  },
  {
    id: "2",
    name: "Casaco de Inverno Premium",
    price: 299.9,
    description: "Casaco térmico para dias frios, com acabamento premium",
    imageUrl:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800",
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
