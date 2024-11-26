import React from 'react';
import { Package, Users, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { DashboardCard } from '../../components/admin/DashboardCard';

export const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Painel Administrativo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Produtos"
          description="Gerenciar produtos"
          icon={Package}
          iconColor="text-blue-600"
          onClick={() => navigate('/admin/products')}
        />

        <DashboardCard
          title="Usuários"
          description="Gerenciar contas de usuários"
          icon={Users}
          iconColor="text-green-600"
          onClick={() => navigate('/admin/users')}
        />

        <DashboardCard
          title="Pedidos"
          description="Visualizar e gerenciar pedidos"
          icon={ShoppingBag}
          iconColor="text-purple-600"
          onClick={() => navigate('/admin/orders')}
        />
      </div>
    </div>
  );
};