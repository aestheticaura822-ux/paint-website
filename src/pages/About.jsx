// src/pages/About.jsx
import { Award, Users, Leaf, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users size={32} />, value: '50K+', label: 'Happy Customers' },
    { icon: <Award size={32} />, value: '100+', label: 'Awards Won' },
    { icon: <Leaf size={32} />, value: '500+', label: 'Eco Projects' },
    { icon: <Trophy size={32} />, value: '10+', label: 'Years Experience' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828" 
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ColorSplash</h1>
          <p className="text-lg max-w-2xl mx-auto">Bringing colors to life since 2014</p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1E2A5A] mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-[#FF9B50] mb-6"></div>
            <p className="text-gray-700 mb-4">
              Founded in 2014, ColorSplash Paints has been at the forefront of the paint industry, 
              delivering premium quality paints that transform spaces into masterpieces.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to provide eco-friendly, durable, and beautiful paint solutions that 
              inspire creativity and protect your home for years to come.
            </p>
            <p className="text-gray-700">
              With over 5000+ satisfied customers and counting, we continue to innovate and bring 
              the latest color trends to your doorstep.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f" 
              alt="Our Story"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#1E2A5A] to-[#2C3E6A] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-[#1E2A5A] mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide high-quality, sustainable paint solutions that enhance living spaces 
              while protecting the environment.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-[#1E2A5A] mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become Pakistan's most trusted paint brand, known for innovation, quality, 
              and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;