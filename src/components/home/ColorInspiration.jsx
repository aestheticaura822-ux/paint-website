// src/components/home/ColorInspiration.jsx
import { Palette, Sparkles, Eye, Heart, Copy, Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const ColorInspiration = () => {
  const sectionRef = useRef(null);
  const [hoveredPalette, setHoveredPalette] = useState(null);
  const [copiedColor, setCopiedColor] = useState(null);
  const [likedPalettes, setLikedPalettes] = useState({});
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const colorPalettes = [
    { 
      id: 1, 
      name: "Sunset Dreams", 
      colors: ["#FF6B6B", "#FF9B50", "#FFE66D", "#4ECDC4"],
      description: "Warm and vibrant tones perfect for living rooms",
      popular: true,
      season: "Summer",
      likes: 1234
    },
    { 
      id: 2, 
      name: "Ocean Breeze", 
      colors: ["#1E2A5A", "#3498DB", "#2ECC71", "#A8E6CF"],
      description: "Calming blues and greens for bedrooms",
      popular: false,
      season: "Spring",
      likes: 892
    },
    { 
      id: 3, 
      name: "Forest Magic", 
      colors: ["#2C3E50", "#27AE60", "#F1C40F", "#E67E22"],
      description: "Earthy and natural combinations",
      popular: true,
      season: "Autumn",
      likes: 2156
    },
    { 
      id: 4, 
      name: "Royal Elegance", 
      colors: ["#8E44AD", "#9B59B6", "#E74C3C", "#F39C12"],
      description: "Luxurious purples and rich accents",
      popular: false,
      season: "Winter",
      likes: 1567
    }
  ];

  const copyToClipboard = (color, paletteId) => {
    navigator.clipboard.writeText(color);
    setCopiedColor({ paletteId, color });
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const likePalette = (paletteId) => {
    setLikedPalettes(prev => ({
      ...prev,
      [paletteId]: !prev[paletteId]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#FF9B50]/20 to-[#FF6B35]/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-[#1E2A5A]/10 to-[#2C3E6A]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        
        {/* Floating Color Dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF9B50]/10 to-[#1E2A5A]/10 rounded-full px-4 py-2 mb-4 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Palette className="text-[#FF9B50] animate-pulse" size={18} />
            <span className="text-sm font-semibold text-[#1E2A5A]">Color Inspiration</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#1E2A5A] to-[#2C3E6A] bg-clip-text text-transparent">
              Trending Color
            </span>
            <span className="bg-gradient-to-r from-[#FF9B50] to-[#FF6B35] bg-clip-text text-transparent ml-3">
              Palettes
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore trending color combinations for your dream home
          </p>
          
          <motion.div 
            className="relative w-24 h-1 bg-gradient-to-r from-[#FF9B50] to-[#1E2A5A] mx-auto mt-6 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Color Palettes Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {colorPalettes.map((palette, index) => (
            <motion.div
              key={palette.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredPalette(palette.id)}
              onMouseLeave={() => setHoveredPalette(null)}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Color Strip with 3D Effect */}
                <div className="relative h-48 overflow-hidden">
                  <div className="flex h-full">
                    {palette.colors.map((color, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex-1 relative cursor-pointer group/color"
                        style={{ backgroundColor: color }}
                        whileHover={{ flex: 2 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => copyToClipboard(color, palette.id)}
                      >
                        {/* Color Tooltip */}
                        <motion.div 
                          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/color:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <div className="text-center">
                            <Copy size={20} className="text-white mx-auto mb-1" />
                            <span className="text-white text-xs font-mono">{color}</span>
                          </div>
                        </motion.div>
                        
                        {/* Copy Success Animation */}
                        {copiedColor?.paletteId === palette.id && copiedColor?.color === color && (
                          <motion.div 
                            className="absolute inset-0 bg-green-500/80 flex items-center justify-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Check size={24} className="text-white" />
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Popular Badge */}
                  {palette.popular && (
                    <motion.div 
                      className="absolute top-4 left-4 z-10"
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <Sparkles size={12} />
                        Most Popular
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Season Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 z-10"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      {palette.season} Collection
                    </div>
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-xl text-[#1E2A5A] group-hover:text-[#FF9B50] transition-colors">
                      {palette.name}
                    </h3>
                    
                    {/* Like Button */}
                    <motion.button 
                      className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors"
                      whileTap={{ scale: 0.8 }}
                      onClick={() => likePalette(palette.id)}
                    >
                      <Heart 
                        size={18} 
                        className={likedPalettes[palette.id] ? "fill-red-500 text-red-500" : ""}
                      />
                      <span className="text-xs">{palette.likes + (likedPalettes[palette.id] ? 1 : 0)}</span>
                    </motion.button>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-4">{palette.description}</p>
                  
                  {/* Color Codes */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {palette.colors.map((color, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => copyToClipboard(color, palette.id)}
                      >
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-xs font-mono text-gray-600">{color}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* View Details Button */}
                  <motion.button 
                    className="w-full bg-gradient-to-r from-gray-50 to-gray-100 text-[#1E2A5A] py-2 rounded-xl font-semibold hover:from-[#FF9B50] hover:to-[#FF6B35] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Eye size={16} />
                    View Color Combinations
                  </motion.button>
                </div>
                
                {/* Hover Border Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ borderWidth: 0 }}
                  whileHover={{ borderWidth: 2 }}
                  transition={{ duration: 0.3 }}
                  style={{ borderColor: palette.colors[0], borderStyle: "solid" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Section */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button 
            className="group relative bg-gradient-to-r from-[#1E2A5A] to-[#2C3E6A] text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View More Combinations</span>
            <Eye size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#FF9B50] to-[#FF6B35]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Color Tip Card */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-[#1E2A5A] to-[#2C3E6A] rounded-2xl p-6 text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF9B50]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#FF9B50] rounded-full flex items-center justify-center">
                <Sparkles size={32} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Color Consultation Free!</h4>
                <p className="text-white/90">Get expert advice on color combinations for your home</p>
              </div>
            </div>
            <button className="bg-white text-[#1E2A5A] px-6 py-2 rounded-full font-semibold hover:bg-[#FF9B50] hover:text-white transition-all duration-300 whitespace-nowrap">
              Book Free Session →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ColorInspiration;