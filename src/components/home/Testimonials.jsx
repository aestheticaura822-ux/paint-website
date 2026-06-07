// src/components/home/Testimonials.jsx
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Amazing quality paints! The finish is smooth and the colors are exactly as shown. Highly recommend!",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Best paint brand I've ever used. Eco-friendly and no strong smell. My house looks beautiful!",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Anjali Singh",
      location: "Bangalore",
      rating: 5,
      text: "Excellent customer service and quick delivery. The paint quality is superb!",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A5A] mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-600">Trusted by thousands of happy customers</p>
          <div className="w-20 h-1 bg-[#FF9B50] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg relative">
              <Quote className="absolute top-4 right-4 text-gray-200" size={40} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#FF9B50] text-[#FF9B50]" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#1E2A5A]">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;