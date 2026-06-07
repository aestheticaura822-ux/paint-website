// frontend/src/components/admin/ProductForm.jsx
import { useState } from 'react';
import { X } from 'lucide-react';

const ProductForm = ({ product, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    category: product?.category || '',
    finish: product?.finish || '',
    price: product?.price || '',
    oldPrice: product?.old_price || '',
    stock: product?.stock || '',
    description: product?.description || '',
    colors: product?.colors?.join(', ') || '',
    images: product?.images || []
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Process colors
    const colorsArray = formData.colors.split(',').map(c => c.trim());
    
    const productData = {
      name: formData.name,
      category: formData.category,
      finish: formData.finish,
      price: parseFloat(formData.price),
      old_price: formData.oldPrice ? parseFloat(formData.oldPrice) : null,
      stock: parseInt(formData.stock),
      description: formData.description,
      colors: colorsArray,
      images: formData.images.length ? formData.images : ['https://images.unsplash.com/photo-1589939705384-5185137a7f0f']
    };
    
    await onSubmit(productData);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white">
          <h2 className="text-xl font-bold text-[#1E2A5A]">
            {product ? 'Edit Product' : 'Add New Product'}
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Product Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
                required
              >
                <option value="">Select Category</option>
                <option>Wall Paints</option>
                <option>Wood Finishes</option>
                <option>Metal Paints</option>
                <option>Exterior Paints</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Finish Type</label>
              <select
                name="finish"
                value={formData.finish}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
              >
                <option value="">Select Finish</option>
                <option>Matte</option>
                <option>Gloss</option>
                <option>Satin</option>
                <option>Silk</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Stock Quantity *</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Price (₹) *</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Old Price (₹)</label>
              <input
                type="number"
                name="oldPrice"
                value={formData.oldPrice}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Colors (comma separated hex codes)</label>
            <input
              type="text"
              name="colors"
              value={formData.colors}
              onChange={handleChange}
              placeholder="#FF5733, #33FF57, #3357FF"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image URL (optional)</label>
            <input
              type="text"
              name="images"
              value={formData.images[0] || ''}
              onChange={(e) => setFormData({ ...formData, images: [e.target.value] })}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-[#1E2A5A] text-white py-2 rounded-lg font-semibold hover:bg-[#2C3E6A] transition disabled:bg-gray-400"
            >
              {loading ? 'Saving...' : product ? 'Update Product' : 'Add Product'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;