import React from 'react';
import { Link } from 'react-router-dom';
import { useCategoryStore } from '../../store/categoryStore';

export const CategoryList = () => {
  const { categories } = useCategoryStore();

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 py-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categoria/${category.slug}`}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};