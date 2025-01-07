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
      "https://acdn.mitiendanube.com/stores/002/037/298/products/xbre5bx-ffa4648aefc181228216522036710621-1024-1024.webp",
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
      "https://acdn.mitiendanube.com/stores/002/037/298/products/r8tpgs9-69611169236149a31516521949612638-1024-1024.jpg",
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
      "https://acdn.mitiendanube.com/stores/002/037/298/products/jlcq4ck-d10a3833cbb323632b16522036768118-1024-1024.webp",
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
      "https://acdn.mitiendanube.com/stores/002/037/298/products/xbre5bx-ffa4648aefc181228216522036710621-1024-1024.webp",
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
      "https://acdn.mitiendanube.com/stores/002/037/298/products/xbre5bx-ffa4648aefc181228216522036710621-1024-1024.webp",
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
