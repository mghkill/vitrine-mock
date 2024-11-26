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
  items: [],
  addItem: (newItem) => set((state) => {
    const existingItem = state.items.find(
      item => item.product.id === newItem.product.id && item.size === newItem.size
    );

    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.product.id === newItem.product.id && item.size === newItem.size
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      };
    }

    return { items: [...state.items, newItem] };
  }),
  removeItem: (productId) => set((state) => ({
    items: state.items.filter(item => item.product.id !== productId)
  })),
  updateQuantity: (productId, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.product.id === productId
        ? { ...item, quantity }
        : item
    )
  })),
  clearCart: () => set({ items: [] }),
  getTotal: () => {
    return get().items.reduce((total, item) => {
      const price = item.product.discount
        ? item.product.price * (1 - item.product.discount / 100)
        : item.product.price;
      return total + price * item.quantity;
    }, 0);
  }
}));