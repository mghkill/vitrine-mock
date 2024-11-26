import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  onClick?: () => void;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  icon: Icon,
  iconColor,
  onClick,
}) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <Icon className={`h-8 w-8 ${iconColor}`} />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};