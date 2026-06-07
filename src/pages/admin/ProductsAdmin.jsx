// frontend/src/pages/admin/ProductsAdmin.jsx
import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import ProductTable from '../../components/admin/ProductTable';
import ProductForm from '../../components/admin/ProductForm';
import { productService } from '../../services/productService';
import toast from 'react-hot-toast';

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await productService.getAll();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (product) => {
    try {
      const newProduct = await productService.create(product);
      setProducts([newProduct, ...products]);
      toast.success('Product added successfully');
      setShowForm(false);
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error(error.response?.data?.message || 'Failed to add product');
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleUpdate = async (updatedProduct) => {
    try {
      const data = await productService.update(updatedProduct.id, updatedProduct);
      setProducts(products.map(p => p.id === data.id ? data : p));
      toast.success('Product updated successfully');
      setShowForm(false);
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Failed to update product');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await productService.delete(id);
      setProducts(products.filter(p => p.id !== id));
      toast.success('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Failed to delete product');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-[#1E2A5A] border-t-[#FF9B50] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#1E2A5A]">Products Management</h1>
        <button
          onClick={() => {
            setEditingProduct(null);
            setShowForm(true);
          }}
          className="bg-[#FF9B50] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#E88A3A] transition"
        >
          <Plus size={18} /> Add Product
        </button>
      </div>

      <ProductTable 
        products={products} 
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {showForm && (
        <ProductForm
          product={editingProduct}
          onSubmit={editingProduct ? handleUpdate : handleAdd}
          onClose={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
        />
      )}
    </div>
  );
};

export default ProductsAdmin;