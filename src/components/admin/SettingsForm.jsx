// src/components/admin/SettingsForm.jsx
import { useState } from 'react';
import { FaSave, FaGlobe, FaFacebook, FaEnvelope } from 'react-icons/fa';

import toast from 'react-hot-toast';

const SettingsForm = ({ settings, onSave }) => {
  const [formData, setFormData] = useState({
    siteName: settings?.siteName || 'ColorSplash Paints',
    heroTitle: settings?.heroTitle || 'Transform Your World with Colors',
    contactEmail: settings?.contactEmail || 'info@colorsplash.com',
    contactPhone: settings?.contactPhone || '+92 300 1234567',
    address: settings?.address || 'Lahore, Pakistan',
    facebook: settings?.facebook || '',
    instagram: settings?.instagram || '',
    youtube: settings?.youtube || '',
    whatsapp: settings?.whatsapp || ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onSave(formData);
    setLoading(false);
    toast.success('Settings saved successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-[#1E2A5A] mb-4 flex items-center gap-2">
          <FaGlobe size={20} /> General Settings
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Site Name</label>
            <input
              type="text"
              name="siteName"
              value={formData.siteName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Hero Title</label>
            <input
              type="text"
              name="heroTitle"
              value={formData.heroTitle}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-[#1E2A5A] mb-4 flex items-center gap-2">
          <FaEnvelope size={20} /> Contact Information
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-[#1E2A5A] mb-4 flex items-center gap-2">
          <FaFacebook size={20} /> Social Media Links
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Facebook URL</label>
            <input
              type="url"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              placeholder="https://facebook.com/yourpage"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Instagram URL</label>
            <input
              type="url"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="https://instagram.com/yourpage"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">YouTube URL</label>
            <input
              type="url"
              name="youtube"
              value={formData.youtube}
              onChange={handleChange}
              placeholder="https://youtube.com/yourchannel"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="+92 300 1234567"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#1E2A5A] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#2C3E6A] transition flex items-center gap-2 disabled:bg-gray-400"
        >
          <FaSave size={18} /> {loading ? 'Saving...' : 'Save Settings'}
        </button>
      </div>
    </form>
  );
};

export default SettingsForm;