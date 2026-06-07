// src/components/admin/ProductTable.jsx
import { useState } from 'react';
import { Edit, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProductTable = ({ products, onEdit, onDelete }) => {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete "${name}"?`)) {
      onDelete(id);
      toast.success('Product deleted');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="p-4 border-b">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 px-4 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-600 text-sm">
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                </td>
                <td className="p-4 font-medium">{product.name}</td>
                <td className="p-4 text-gray-600">{product.category}</td>
                <td className="p-4 font-semibold text-[#FF9B50]">₹{product.price}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${product.stock < 50 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                    {product.stock}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <Link to={`/products/${product.id}`} className="p-1 text-blue-500 hover:text-blue-700">
                      <Eye size={18} />
                    </Link>
                    <button onClick={() => onEdit(product)} className="p-1 text-green-500 hover:text-green-700">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleDelete(product.id, product.name)} className="p-1 text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;