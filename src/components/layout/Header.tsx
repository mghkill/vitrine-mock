import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export const Header = () => {
  const { user, isAuthenticated, logout } = useAuthStore();

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Loja de Roupas
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-gray-600 hover:text-gray-900">
            <ShoppingCart className="h-6 w-6" />
          </Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              {user?.role === 'admin' && (
                <Link 
                  to="/admin" 
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Painel Administrativo
                </Link>
              )}
              <button 
                onClick={logout}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Sair
              </button>
            </div>
          ) : (
            <Link to="/login" className="flex items-center text-gray-600 hover:text-gray-900">
              <User className="h-6 w-6" />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};