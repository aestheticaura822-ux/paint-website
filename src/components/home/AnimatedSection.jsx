// src/components/home/AnimatedSection.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { Paintbrush, Sparkles, Shield, Droplet, Award, TrendingUp, ArrowRight, CheckCircle, Clock, ThumbsUp, Truck, Leaf, Heart } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const AnimatedSection = () => {
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const features = [
    {
      icon: Paintbrush,
      title: "Professional Application",
      description: "Smooth and even coverage every time",
      detail: "Our expert team ensures flawless application with advanced techniques",
      stat: "1000+ Projects",
      statIcon: TrendingUp,
      color: "#FF9B50",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Sparkles,
      title: "Premium Finish",
      description: "Luxurious matte, silk, and gloss finishes",
      detail: "Available in 500+ colors with premium texture options",
      stat: "50+ Shades",
      statIcon: Award,
      color: "#FFD700",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Long Lasting Protection",
      description: "Resistant to fading, cracking, and peeling",
      detail: "Weather-resistant formula with 10 years warranty",
      stat: "10 Years Warranty",
      statIcon: Clock,
      color: "#4ECDC4",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Droplet,
      title: "Eco-Friendly Formula",
      description: "Low VOC, safe for children and pets",
      detail: "100% organic materials with zero harmful chemicals",
      stat: "100% Green",
      statIcon: Leaf,
      color: "#95E77E",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { value: 1250, label: "Projects Completed", icon: CheckCircle, suffix: "+" },
    { value: 8900, label: "Happy Customers", icon: Heart, suffix: "+" },
    { value: 500, label: "Color Options", icon: Award, suffix: "+" },
    { value: 24, label: "Hour Support", icon: Clock, suffix: "/7" }
  ];

  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        if (step >= steps) {
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = stat.value;
            return newStats;
          });
          clearInterval(timer);
        } else {
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(current);
            return newStats;
          });
        }
      }, duration / steps);

      return timer;
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden relative">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF9B50] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E2A5A] rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#FF9B50]/10 via-transparent to-[#1E2A5A]/10 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Side - Animated Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="data:image/jpeg;base64,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" 
                alt="Paint Application"
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
            </div>
            
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-gradient-to-br from-[#FF9B50] to-[#FF6B35] text-white p-5 rounded-2xl shadow-xl backdrop-blur-sm"
            >
              <div className="text-center">
                <p className="text-3xl font-bold">⭐ 4.9</p>
                <p className="text-xs opacity-90">Customer Rating</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#1E2A5A] to-[#2C3E6A] text-white p-5 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <motion.p 
                  className="text-3xl font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  10+
                </motion.p>
                <p className="text-xs">Years Excellence</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF9B50]/10 to-[#1E2A5A]/10 rounded-full px-4 py-2 backdrop-blur-sm"
            >
              <Sparkles className="text-[#FF9B50] animate-pulse" size={18} />
              <span className="text-sm font-semibold text-[#1E2A5A]">Why Choose Us</span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ y: textY }}
            >
              <span className="bg-gradient-to-r from-[#1E2A5A] to-[#2C3E6A] bg-clip-text text-transparent">
                Transform Your Walls
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#FF9B50] to-[#FF6B35] bg-clip-text text-transparent">
                With Premium Quality
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Experience the difference with our advanced paint technology. 
              Our paints are specially formulated to provide superior coverage, 
              durability, and a flawless finish that lasts for years.
            </motion.p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-[#FF9B50]/10 to-[#1E2A5A]/10 rounded-lg">
                      <stat.icon className="text-[#FF9B50]" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#1E2A5A]">
                        {animatedStats[index]}{stat.suffix}
                      </p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-[#1E2A5A] to-[#2C3E6A] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF9B50]/20 rounded-full blur-3xl"
          />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-semibold mb-4">
                  "The best paint quality I've ever used! The finish is absolutely stunning and it's so durable."
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="Customer"
                    className="w-12 h-12 rounded-full border-2 border-[#FF9B50]"
                  />
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm opacity-80">Homeowner</p>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default AnimatedSection;