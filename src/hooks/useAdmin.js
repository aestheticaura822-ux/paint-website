// src/hooks/useAdmin.js
import { useState, useEffect } from 'react';
import useAdminStore from '../store/adminStore';
import { adminService } from '../services/adminService';

export const useAdmin = () => {
  const { isAuthenticated, admin, login, logout, checkAuth } = useAdminStore();
  const [stats, setStats] = useState(null);
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const statsData = await adminService.getDashboardStats();
      const salesChartData = await adminService.getSalesData();
      setStats(statsData);
      setSalesData(salesChartData);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    isAuthenticated,
    admin,
    login,
    logout,
    stats,
    salesData,
    loading,
    fetchDashboardData
  };
};