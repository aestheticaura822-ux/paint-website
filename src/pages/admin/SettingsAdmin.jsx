// src/pages/admin/SettingsAdmin.jsx
import { useState, useEffect } from 'react';
import SettingsForm from '../../components/admin/SettingsForm';

const SettingsAdmin = () => {
  const [settings, setSettings] = useState({
    siteName: 'ColorSplash Paints',
    heroTitle: 'Transform Your World with Colors',
    contactEmail: 'info@colorsplash.com',
    contactPhone: '+92 300 1234567',
    address: 'Lahore, Pakistan',
    facebook: '',
    instagram: '',
    youtube: '',
    whatsapp: ''
  });

  useEffect(() => {
    const stored = localStorage.getItem('siteSettings');
    if (stored) {
      setSettings(JSON.parse(stored));
    }
  }, []);

  const handleSave = (newSettings) => {
    localStorage.setItem('siteSettings', JSON.stringify(newSettings));
    setSettings(newSettings);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1E2A5A] mb-6">Site Settings</h1>
      <SettingsForm settings={settings} onSave={handleSave} />
    </div>
  );
};

export default SettingsAdmin;