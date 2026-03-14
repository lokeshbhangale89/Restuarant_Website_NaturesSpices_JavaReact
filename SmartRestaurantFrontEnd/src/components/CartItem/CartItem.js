import React from 'react';

const CartItem = ({ fooditem, onRemoveFromCart  }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h5 className="mb-0">{fooditem.name}</h5>
        <p className="text-muted mb-0">{fooditem.description}</p>
        <strong className="text-muted">Rs. {fooditem.price}</strong>
        {/* <strong className="text-muted ms-5">Quantity: 
        <input type="number" 
        value={fooditem.quantity} min="1" onChange={(event) => updateQuantity(fooditem, parseInt(event.target.value))} />
        </strong> */}
      </div>
      <button className="btn btn-primary"  size="sm" onClick={() => onRemoveFromCart(fooditem.productId)}>Remove</button>
    </div>
  );
};

export default CartItem;
 