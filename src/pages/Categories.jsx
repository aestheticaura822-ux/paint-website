// src/pages/Categories.jsx
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Wall Paints', slug: 'wall-paints', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f', count: 24, description: 'Beautiful finishes for your interior walls' },
    { id: 2, name: 'Wood Finishes', slug: 'wood-finishes', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828', count: 18, description: 'Protect and enhance wooden surfaces' },
    { id: 3, name: 'Metal Paints', slug: 'metal-paints', image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa', count: 12, description: 'Rust-proof durable metal coatings' },
    { id: 4, name: 'Exterior Paints', slug: 'exterior-paints', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828', count: 20, description: 'Weather-resistant exterior solutions' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1E2A5A] mb-3">
          Shop by Category
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find the perfect paint for your specific needs
        </p>
        <div className="w-20 h-1 bg-[#FF9B50] mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.id} to={`/categories/${category.slug}`}>
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-[#1E2A5A] mb-2">{category.name}</h2>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <p className="text-[#FF9B50] font-semibold">{category.count} Products</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;