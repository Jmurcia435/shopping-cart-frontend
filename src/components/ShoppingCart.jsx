import React from 'react';
import './ShoppingCart.css';

function ShoppingCart({ items, onRemove, onUpdateQuantity, onCheckout, isLoading }) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="shopping-cart">
      <h2 className="cart-title">
        🛒 Cart
        {items.length > 0 && <span className="cart-count">{items.length}</span>}
      </h2>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <p className="empty-msg">Add items to get started!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <div key={item.productId} className="cart-item">
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p className="item-price">${parseFloat(item.price).toFixed(2)} each</p>
                </div>
                <div className="item-quantity">
                  <button onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}>
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.productId, parseInt(e.target.value) || 1)}
                  />
                  <button onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button
                  className="remove-btn"
                  onClick={() => onRemove(item.productId)}
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax (estimated):</span>
              <span>${(total * 0.1).toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${(total * 1.1).toFixed(2)}</span>
            </div>
          </div>

          <button
            className="checkout-btn"
            onClick={onCheckout}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Checkout & Save Order'}
          </button>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
