// src/components/home/Newsletter.jsx
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Subscribed successfully!');
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#FF9B50] to-[#E88A3A]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <Mail size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/90 mb-8">
            Get exclusive offers, color trends, and painting tips directly in your inbox
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button 
              type="submit"
              className="bg-[#1E2A5A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2C3E6A] transition flex items-center justify-center gap-2"
            >
              Subscribe <Send size={18} />
            </button>
          </form>

          <p className="text-white/70 text-sm mt-4">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;