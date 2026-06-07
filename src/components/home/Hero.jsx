// src/components/home/Hero.jsx
import { ArrowRight, Sparkles, Palette, Brush } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const words = ['Transform', 'Create', 'Inspire', 'Revolutionize'];
  const baseText = ` ${words[currentIndex]} Your World`;

  // Typing animation effect
  useEffect(() => {
    let timeout;
    if (displayText.length < baseText.length) {
      timeout = setTimeout(() => {
        setDisplayText(baseText.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [displayText, baseText]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Video with Zoom Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110 animate-slow-zoom"
          poster="https://plus.unsplash.com/premium_photo-1683134301478-5e5204b0ca87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHdhbGwlMjBwYWludHxlbnwwfHwwfHx8MA%3D%3D"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-paint-colors-mixing-32880-large.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#FF9B50]/20"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            <Palette 
              size={20 + Math.random() * 20} 
              className="text-[#FF9B50] opacity-20"
            />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white z-10">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 animate-bounce-slow">
          <Sparkles className="text-[#FF9B50] animate-pulse" size={18} />
          <span className="text-sm font-medium">Premium Quality Since 1995</span>
        </div>

        {/* Dynamic Typing Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="inline-block animate-gradient-text bg-gradient-to-r from-white via-[#FF9B50] to-white bg-clip-text text-transparent bg-300%">
            {displayText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-[#FF9B50]`}>|</span>
          </span>
          <br />
          <span className="text-[#FF9B50] inline-block animate-float-slow"> With Colors</span>
        </h1>

        {/* Animated Subtitle */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto backdrop-blur-sm bg-black/20 rounded-2xl p-4 animate-fade-in-up">
          Premium quality paints for your dream home. 
          <span className="block text-[#FF9B50] font-semibold mt-1">
            Eco-friendly • Durable • Beautiful Finishes
          </span>
        </p>

        {/* Animated Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/products" 
            className="group relative bg-gradient-to-r from-[#FF9B50] to-[#E88A3A] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">Shop Now</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#E88A3A] to-[#FF9B50] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          
          <Link 
            to="/contact" 
            className="group relative border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1E2A5A] transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2 overflow-hidden"
          >
            <Brush size={20} className="group-hover:rotate-12 transition-transform" />
            <span>Get Consultation</span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;