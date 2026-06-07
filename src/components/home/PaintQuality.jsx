// src/components/home/PaintQuality.jsx
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Droplet, Wind, Shield, Sparkles, Sun, Droplets,
  Award, CheckCircle, TrendingUp, Brush
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PaintQuality = () => {
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <Droplet size={28} />,
      title: "100% Acrylic",
      description: "Premium quality acrylic-based formula for superior durability",
      color: "from-blue-500 to-cyan-500",
      detail: "Lasts up to 10 years"
    },
    {
      icon: <Wind size={28} />,
      title: "Low VOC",
      description: "Environmentally friendly with no harmful chemicals",
      color: "from-green-500 to-emerald-500",
      detail: "Safe for families"
    },
    {
      icon: <Shield size={28} />,
      title: "Anti-Fungal",
      description: "Protects walls from fungus and algae growth",
      color: "from-purple-500 to-indigo-500",
      detail: "Health protection"
    },
    {
      icon: <Brush size={28} />,
      title: "Easy Application",
      description: "Smooth application with excellent coverage",
      color: "from-orange-500 to-red-500",
      detail: "One coat coverage"
    },
    {
      icon: <Droplets size={28} />,
      title: "Water Resistant",
      description: "Superior water resistance for exterior walls",
      color: "from-cyan-500 to-blue-500",
      detail: "Rain protection"
    },
    {
      icon: <Sun size={28} />,
      title: "UV Protection",
      description: "Protects against harmful UV rays and fading",
      color: "from-yellow-500 to-amber-500",
      detail: "Color stays bright"
    }
  ];

  const stats = [
    { value: "5000+", label: "Homes Painted", icon: <Award size={24} /> },
    { value: "98%", label: "Customer Satisfaction", icon: <TrendingUp size={24} /> },
    { value: "10+", label: "Years Warranty", icon: <Shield size={24} /> },
    { value: "24/7", label: "Expert Support", icon: <Sparkles size={24} /> }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-[#1E2A5A] to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="text-[#FF9B50]" size={18} />
            <span className="text-white text-sm font-semibold">Premium Quality Paint</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Paint
            <span className="text-[#FF9B50] ml-3">Technology</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Engineered for perfection. Our paints are scientifically formulated to provide the best protection and finish.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center bg-white/5 rounded-2xl p-4 border border-white/10">
              <div className="text-[#FF9B50] mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm mb-3">{feature.description}</p>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#FF9B50]" />
                <span className="text-white/40 text-xs">{feature.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Banner */}
        <motion.div 
          className="bg-gradient-to-r from-[#FF9B50] to-[#FF6B35] rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Our Paint Stands Out?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-white" />
                  <span className="text-white/90">Superior coverage - one coat enough</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-white" />
                  <span className="text-white/90">Dries in just 2 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-white" />
                  <span className="text-white/90">Washable and scrub-resistant finish</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-white" />
                  <span className="text-white/90">10 year color retention warranty</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">Rs 2499</div>
              <div className="text-white/80 text-sm">Starting price per liter</div>
              <Link 
                to="/products"
                className="inline-block mt-4 bg-white text-[#FF6B35] px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1E2A5A] transition-all duration-300"
          >
            Get Free Consultation
            <Sparkles size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PaintQuality;