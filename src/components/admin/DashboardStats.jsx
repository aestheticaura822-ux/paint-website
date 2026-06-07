// src/components/admin/DashboardStats.jsx
import { DollarSign, Package, ShoppingCart, MessageSquare, TrendingUp, TrendingDown } from 'lucide-react';

const DashboardStats = ({ stats }) => {
  const statCards = [
    {
      title: 'Total Revenue',
      value: `₹${stats?.totalRevenue?.toLocaleString() || '0'}`,
      icon: <DollarSign size={24} />,
      color: 'bg-green-500',
      trend: '+12.5%',
      trendUp: true
    },
    {
      title: 'Total Products',
      value: stats?.totalProducts || '0',
      icon: <Package size={24} />,
      color: 'bg-blue-500',
      trend: '+5',
      trendUp: true
    },
    {
      title: 'Total Orders',
      value: stats?.totalOrders || '0',
      icon: <ShoppingCart size={24} />,
      color: 'bg-purple-500',
      trend: '+8',
      trendUp: true
    },
    {
      title: 'Messages',
      value: stats?.unreadMessages || '0',
      icon: <MessageSquare size={24} />,
      color: 'bg-orange-500',
      trend: stats?.unreadMessages > 0 ? `${stats.unreadMessages} unread` : 'All read',
      trendUp: stats?.unreadMessages > 0
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {statCards.map((card, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`${card.color} p-3 rounded-lg text-white`}>
              {card.icon}
            </div>
            <div className={`flex items-center gap-1 text-sm ${card.trendUp ? 'text-green-500' : 'text-red-500'}`}>
              {card.trendUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span>{card.trend}</span>
            </div>
          </div>
          <h3 className="text-gray-500 text-sm">{card.title}</h3>
          <p className="text-2xl md:text-3xl font-bold text-[#1E2A5A] mt-1">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;