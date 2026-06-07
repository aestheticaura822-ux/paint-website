// src/components/admin/Sidebar.jsx
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  MessageSquare, 
  Settings, 
  LogOut,
  X,
  Palette
} from 'lucide-react';
import toast from 'react-hot-toast';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/admin/products', icon: <Package size={20} />, label: 'Products' },
    { path: '/admin/orders', icon: <ShoppingCart size={20} />, label: 'Orders' },
    { path: '/admin/messages', icon: <MessageSquare size={20} />, label: 'Messages' },
    { path: '/admin/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <Link to="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF9B50] rounded-full flex items-center justify-center">
            <Palette size={16} className="text-white" />
          </div>
          <span className="text-white font-bold text-lg">Admin Panel</span>
        </Link>
        <button onClick={onClose} className="lg:hidden text-white">
          <X size={24} />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => onClose()}
              className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition ${
                isActive 
                  ? 'bg-[#FF9B50] text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 bg-[#1E2A5A] flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />
          <aside className="fixed inset-y-0 left-0 w-64 bg-[#1E2A5A] z-50 flex flex-col lg:hidden">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  );
};

export default Sidebar;