export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  sizes: string[];
  discount?: number;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}