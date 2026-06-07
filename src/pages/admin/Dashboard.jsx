// frontend/src/pages/admin/Dashboard.jsx
import { useState, useEffect } from 'react';
import DashboardStats from '../../components/admin/DashboardStats';
import SalesChart from '../../components/admin/SalesChart';
import RecentOrders from '../../components/admin/RecentOrders';
import LowStockAlert from '../../components/admin/LowStockAlert';
import { adminService } from '../../services/adminService';
import { productService } from '../../services/productService';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalProducts: 0,
    totalOrders: 0,
    unreadMessages: 0
  });
  const [salesData, setSalesData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // Fetch stats
      const statsData = await adminService.getDashboardStats();
      setStats(statsData);

      // Fetch products for low stock alert
      const productsData = await productService.getAll();
      setProducts(productsData);

      // Fetch recent orders
      const ordersData = await adminService.getRecentOrders();
      setOrders(ordersData);

      // Fetch sales chart data
      const chartData = await adminService.getSalesChart();
      setSalesData(chartData);
    } catch (error) {
      toast.error('Failed to load dashboard data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-[#1E2A5A] border-t-[#FF9B50] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1E2A5A]">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Admin!</p>
      </div>

      <DashboardStats stats={stats} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart data={salesData} />
        </div>
        <div>
          <LowStockAlert products={products} />
        </div>
      </div>

      <RecentOrders orders={orders} />
    </div>
  );
};

export default Dashboard;