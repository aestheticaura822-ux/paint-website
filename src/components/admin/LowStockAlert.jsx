// src/components/admin/LowStockAlert.jsx
import { AlertTriangle, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const LowStockAlert = ({ products }) => {
  const lowStockProducts = products?.filter(p => p.stock < 50) || [];

  if (lowStockProducts.length === 0) {
    return (
      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
        <div className="flex items-center gap-3">
          <Package className="text-green-500" />
          <p className="text-green-700">All products have sufficient stock</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-yellow-50 rounded-xl shadow-lg p-4 md:p-6 border border-yellow-200">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="text-yellow-600" />
        <h2 className="text-lg font-semibold text-yellow-800">Low Stock Alert</h2>
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {lowStockProducts.length}
        </span>
      </div>

      <div className="space-y-3">
        {lowStockProducts.slice(0, 5).map((product) => (
          <div key={product.id} className="flex justify-between items-center p-3 bg-white rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">{product.name}</p>
              <p className="text-sm text-gray-500">Stock: {product.stock} units</p>
            </div>
            <Link 
              to={`/admin/products`}
              className="bg-[#FF9B50] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#E88A3A] transition"
            >
              Restock
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowStockAlert;