import React from 'react';
import './ProductList.css';

function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p className="no-products">No products available</p>
      ) : (
        products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-header">
              <h3>{product.name}</h3>
              {product.category && (
                <span className="category-badge">{product.category}</span>
              )}
            </div>
            {product.description && (
              <p className="product-description">{product.description}</p>
            )}
            <div className="product-footer">
              <div>
                <span className="price">${parseFloat(product.price).toFixed(2)}</span>
                {product.stock !== null && (
                  <span className={`stock ${product.stock > 0 ? 'in-stock' : 'out-stock'}`}>
                    {product.stock > 0 ? `Stock: ${product.stock}` : 'Out of Stock'}
                  </span>
                )}
              </div>
              <button
                className="add-btn"
                onClick={() => onAddToCart(product)}
                disabled={product.stock === 0}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
