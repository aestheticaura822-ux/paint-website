// src/components/home/BrandFeatures.jsx
import { motion } from 'framer-motion';
import { Droplet, Wind, Recycle, Award, Clock, ThumbsUp } from 'lucide-react';

const BrandFeatures = () => {
  const features = [
    {
      icon: <Droplet size={32} />,
      title: "Water Based",
      description: "Eco-friendly water based formula",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Wind size={32} />,
      title: "Low VOC",
      description: "No harmful chemicals or smell",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Recycle size={32} />,
      title: "Recyclable",
      description: "Eco-friendly packaging",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: <Award size={32} />,
      title: "ISO Certified",
      description: "Internationally certified quality",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Clock size={32} />,
      title: "Quick Drying",
      description: "Dries in just 2 hours",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <ThumbsUp size={32} />,
      title: "Customer Choice",
      description: "Trusted by 50,000+ families",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A5A] mb-3">
            Why Choose Our Paints?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the features that make our paints the best choice for your home
          </p>
          <div className="w-20 h-1 bg-[#FF9B50] mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-2xl transition-all duration-300"
            >
              <div className={`${feature.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1E2A5A] mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandFeatures;