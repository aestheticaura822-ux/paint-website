// src/components/home/WhyChooseUs.jsx
import { Shield, Leaf, Truck, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield size={40} />,
      title: "Premium Quality",
      description: "Highest quality paints with excellent durability and finish"
    },
    {
      icon: <Leaf size={40} />,
      title: "Eco-Friendly",
      description: "Low VOC, environmentally safe paints for your family"
    },
    {
      icon: <Truck size={40} />,
      title: "Free Delivery",
      description: "Free shipping on orders above ₹5000"
    },
    {
      icon: <Award size={40} />,
      title: "10 Year Warranty",
      description: "Confidence in every can with extended warranty"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#1E2A5A] to-[#2C3E6A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Why Choose Us?
          </h2>
          <p className="text-gray-200">What makes us different from others</p>
          <div className="w-20 h-1 bg-[#FF9B50] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center text-white group">
              <div className="bg-white bg-opacity-10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF9B50] transition-colors duration-300">
                <div className="text-[#FF9B50] group-hover:text-white transition">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-200 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;