// src/components/admin/AdminHeader.jsx
import { Menu, Bell} from 'lucide-react';
import { useState } from 'react';

const AdminHeader = ({ onMenuClick }) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Menu Button */}
        <button 
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
        >
          <Menu size={24} />
        </button>

        {/* Title */}
        <h1 className="text-xl font-semibold text-[#1E2A5A] hidden sm:block">
          Paint Company Admin
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Notifications */}
          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
            >
              <div className="w-8 h-8 bg-[#FF9B50] rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
              <span className="hidden md:inline text-gray-700">Admin</span>
            </button>

            {showProfile && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowProfile(false)} />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <div className="px-4 py-2 border-b">
                    <p className="font-semibold">Admin User</p>
                    <p className="text-sm text-gray-500">admin@paint.com</p>
                  </div>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;