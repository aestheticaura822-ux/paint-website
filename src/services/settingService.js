// frontend/src/services/settingService.js
import { supabase } from '../lib/supabase';

export const settingService = {
  // Get settings
  getSettings: async () => {
    const { data, error } = await supabase
      .from('settings')
      .select('*');
    if (error) throw error;
    
    const settings = {};
    data.forEach(item => {
      settings[item.key] = item.value;
    });
    return settings;
  },

  // Update setting (Admin)
  updateSetting: async (key, value) => {
    const { data, error } = await supabase
      .from('settings')
      .update({ value })
      .eq('key', key)
      .select();
    if (error) throw error;
    return data[0];
  }
};