// frontend/src/pages/Contact.jsx
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { contactService } from '../services/contactService';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await contactService.create(formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: <MapPin size={24} />, title: 'Visit Us', details: '123 Paint Street, Lahore, Pakistan' },
    { icon: <Phone size={24} />, title: 'Call Us', details: '+92 300 1234567', link: 'tel:+923001234567' },
    { icon: <Mail size={24} />, title: 'Email Us', details: 'info@colorsplash.com', link: 'mailto:info@colorsplash.com' },
    { icon: <Clock size={24} />, title: 'Working Hours', details: 'Mon-Sat: 9AM - 7PM' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1E2A5A] mb-3">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        <div className="w-20 h-1 bg-[#FF9B50] mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
              <div className="text-[#FF9B50]">{info.icon}</div>
              <div>
                <h3 className="font-semibold text-[#1E2A5A]">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-gray-600 hover:text-[#FF9B50]">{info.details}</a>
                ) : (
                  <p className="text-gray-600">{info.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#1E2A5A] mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#1E2A5A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2C3E6A] transition flex items-center gap-2 disabled:bg-gray-400"
            >
              <Send size={18} /> {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;