import React, { useState } from 'react';

const CartItem = ({ fooditem, onRemoveFromCart, quantity }) => {
  const [removing, setRemoving] = useState(false);

  const handleRemove = () => {
    setRemoving(true);
    setTimeout(() => onRemoveFromCart(fooditem._id), 300);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@400;500;600&display=swap');

        .cart-item {
          display: flex;
          align-items: center;
          gap: 18px;
          background: #fff;
          border-radius: 20px;
          padding: 18px 20px;
          margin-bottom: 16px;
          border: 1.5px solid #f0ece4;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          position: relative;
          font-family: 'DM Sans', sans-serif;
          transition: transform 0.3s ease, opacity 0.3s ease, box-shadow 0.2s ease;
          opacity: ${removing ? 0 : 1};
          transform: ${removing ? 'translateX(40px)' : 'translateX(0)'};
        }

        .cart-item:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.10);
          transform: ${removing ? 'translateX(40px)' : 'translateY(-2px)'};
        }

        .qty-badge {
          position: absolute;
          top: -12px;
          left: -12px;
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 12px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 10px rgba(255,107,53,0.45);
          letter-spacing: 0.3px;
        }

        .item-icon-box {
          background: linear-gradient(135deg, #fff8f2, #fff0e6);
          border-radius: 16px;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1.5px solid #ffe5cc;
        }

        .item-icon {
          font-size: 26px;
        }

        .item-info {
          flex: 1;
          min-width: 0;
        }

        .item-name {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 4px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .item-price-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .item-unit-price {
          font-size: 13px;
          color: #aaa;
          font-weight: 500;
        }

        .price-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #ddd;
        }

        .item-subtotal {
          font-size: 15px;
          font-weight: 700;
          color: #2d9c5f;
          letter-spacing: -0.3px;
        }

        .remove-btn {
          background: #fff0ee;
          color: #e84040;
          border: 1.5px solid #ffd5d0;
          border-radius: 12px;
          padding: 9px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .remove-btn:hover {
          background: #e84040;
          color: #fff;
          border-color: #e84040;
          transform: scale(1.04);
        }

        .remove-btn:active {
          transform: scale(0.97);
        }
      `}</style>

      <div className="cart-item">
        <div className="qty-badge">×{quantity}</div>

        <div className="item-icon-box">
          <span className="item-icon">🍽️</span>
        </div>

        <div className="item-info">
          <p className="item-name">{fooditem.name}</p>
          <div className="item-price-row">
            <span className="item-unit-price">Rs. {fooditem.price} each</span>
            <div className="price-dot" />
            <span className="item-subtotal">Rs. {fooditem.price * quantity}</span>
          </div>
        </div>

        <button className="remove-btn" onClick={() => onRemoveFromCart(fooditem.productId)}>
          🗑 Remove
        </button>
      </div>
    </>
  );
};

export default CartItem;