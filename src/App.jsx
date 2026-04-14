import React, { useState, useEffect } from 'react';
import { fetchProducts, checkout } from './api';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await fetchProducts();
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load products');
      console.error('Error loading products:', err);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.productId === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.productId === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.productId === productId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const handleCheckout = async () => {
    try {
      setCheckoutLoading(true);
      await checkout(cart, null);
      setCheckoutSuccess(true);
      setCart([]);
      setTimeout(() => setCheckoutSuccess(false), 3000);
    } catch (err) {
      setError('Checkout failed: ' + (err.response?.data?.error || err.message));
      console.error('Checkout error:', err);
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🛒 Shopping Cart</h1>
        <p>Your Online Store</p>
      </header>

      <div className="app-container">
        {error && <div className="error-message">{error}</div>}
        {checkoutSuccess && <div className="success-message">✓ Order placed successfully!</div>}

        <div className="main-content">
          <div className="products-section">
            <h2>Products</h2>
            {loading ? (
              <div className="loading">Loading products...</div>
            ) : (
              <ProductList products={products} onAddToCart={addToCart} />
            )}
          </div>

          <aside className="cart-section">
            <ShoppingCart
              items={cart}
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
              onCheckout={handleCheckout}
              isLoading={checkoutLoading}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
