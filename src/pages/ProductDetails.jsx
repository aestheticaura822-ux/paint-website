// src/pages/ProductDetails.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productService } from '../services/productService';
import ProductDetail from '../components/products/ProductDetail';
import RelatedProducts from '../components/products/RelatedProducts';
import Loader from '../components/common/Loader';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await productService.getById(id);
        setProduct(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Product not found');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!product) return <div className="text-center py-20">Product not found</div>;

  return (
    <>
      <ProductDetail product={product} />
      <div className="container mx-auto px-4">
        <RelatedProducts products={[]} />
      </div>
    </>
  );
};

export default ProductDetails;