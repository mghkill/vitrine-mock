import { create } from 'zustand';
import { Category } from '../types';

interface CategoryState {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  addCategory: (category: Category) => void;
  removeCategory: (id: string) => void;
}

// Categorias iniciais
const initialCategories: Category[] = [
  {
    id: '1',
    name: 'Todos',
    slug: 'todos',
    description: 'Todas as categorias'
  },
  {
    id: '2',
    name: 'Esporte',
    slug: 'esporte',
    description: 'Roupas esportivas para todas as atividades'
  },
  {
    id: '3',
    name: 'Inverno',
    slug: 'inverno',
    description: 'Roupas para os dias mais frios'
  }
];

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: initialCategories,
  setCategories: (categories) => set({ categories }),
  addCategory: (category) => set((state) => ({ 
    categories: [...state.categories, category] 
  })),
  removeCategory: (id) => set((state) => ({ 
    categories: state.categories.filter((c) => c.id !== id) 
  })),
}));