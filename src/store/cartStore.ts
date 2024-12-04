import { create } from 'zustand';
import { CartItem } from '../types';

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: JSON.parse(localStorage.getItem('cartItems') || '[]'), // Recupera os itens salvos no localStorage, ou um array vazio
  addItem: (newItem) => set((state) => {
    const existingItem = state.items.find(
      item => item.product.id === newItem.product.id && item.size === newItem.size
    );

    let updatedItems;
    if (existingItem) {
      updatedItems = state.items.map(item =>
        item.product.id === newItem.product.id && item.size === newItem.size
          ? { ...item, quantity: item.quantity + newItem.quantity }
          : item
      );
    } else {
      updatedItems = [...state.items, newItem];
    }

    localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Salva os itens no localStorage
    return { items: updatedItems };
  }),
  removeItem: (productId) => set((state) => {
    const updatedItems = state.items.filter(item => item.product.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Atualiza o localStorage
    return { items: updatedItems };
  }),
  updateQuantity: (productId, quantity) => set((state) => {
    const updatedItems = state.items.map(item =>
      item.product.id === productId
        ? { ...item, quantity }
        : item
    );
    localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Atualiza o localStorage
    return { items: updatedItems };
  }),
  clearCart: () => set(() => {
    localStorage.removeItem('cartItems'); // Remove do localStorage
    return { items: [] };
  }),
  getTotal: () => {
    return get().items.reduce((total, item) => {
      const price = item.product.discount
        ? item.product.price * (1 - item.product.discount / 100)
        : item.product.price;
      return total + price * item.quantity;
    }, 0);
  }
}));
