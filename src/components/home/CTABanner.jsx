// src/components/home/CTABanner.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#1E2A5A] to-[#2C3E6A] relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-10 left-10 w-32 h-32 bg-[#FF9B50]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-[#FF9B50]/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get free color consultation and estimate from our experts today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-[#FF9B50] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E88A3A] transition flex items-center justify-center gap-2"
            >
              Get Free Quote <ArrowRight size={20} />
            </Link>
            <Link 
              to="/products"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1E2A5A] transition flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;