// src/hooks/useCart.js
import useCartStore from '../store/cartStore';

export const useCart = () => {
  const {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getSubtotal,
    getTotal
  } = useCartStore();

  const shipping = getSubtotal() > 5000 ? 0 : 100;

  return {
    cartItems: items,
    cartCount: getTotalItems(),
    subtotal: getSubtotal(),
    shipping,
    total: getTotal(),
    addToCart: addItem,
    removeFromCart: removeItem,
    updateQuantity: updateQuantity,
    clearCart: clearCart,
    isFreeShipping: shipping === 0,
    freeShippingThreshold: 5000,
    amountNeededForFreeShipping: Math.max(0, 5000 - getSubtotal())
  };
};