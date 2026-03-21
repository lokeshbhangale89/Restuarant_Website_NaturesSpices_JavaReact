import React, { useEffect, useState } from 'react';
import CartItem from '../../components/CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems, removeAllFromCart, removeProductFromCart } from '../../store/cartStore/cartSlice';
import { createOrderAPI } from '../../store/cartStore/cartAPI';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import { isloggedIn } from '../../utils/utils';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, cartTotal, loading, error } = useSelector((state) => state.cart);

  const [name, setName] = useState('');
  const [contactno, setContact] = useState('');
  const [address, setAddress] = useState('');

  const islogin = isloggedIn();
  useEffect(() => {
    console.log("islogin from cart: ", islogin)
    if (islogin) {
      dispatch(fetchCartItems());
    }
    else {
      alert("Please login to view cartItems")
    }
  }, []);

  const handleRemoveFromCart = (productId) => {
    console.log("Removing product with ID: ", productId);
    islogin ? dispatch(removeProductFromCart(productId)) : alert("Please login to perform cart operations")
  };

  const handleOrder = async (token) => {

    if (cartItems.length === 0) {
      return alert('Add items to the cart to proceed for checkout');
    }

    else {
      try {
        await createOrderAPI({ name, contactno, address, cartItems, cartTotal });
        dispatch(removeAllFromCart());
        alert('Your order has been placed successfully');
        setAddress('')
        setContact('')
        setName('')
        navigate('/fooditems');
      } catch (error) {
        alert(`Failed to place order: ${error.message}`);
        setAddress('')
        setContact('')
        setName('')
      }
    }
  };

  const [isFormValid, setIsFormValid] = useState(false)
  useEffect(() => {
    if (name && contactno && address && cartItems.length > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, contactno, address, cartItems]);

  return (
    <div className="container my-5 pt-5">
      <div className="row pt-5">
        <div className="col-12 col-md-8 pt-3">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : cartItems.length === 0 ? (
            <div className="text-center">Your cart is empty</div>
          ) : cartItems.map((item) => (
            <CartItem key={item._id} fooditem={item} quantity={item.quantity} onRemoveFromCart={handleRemoveFromCart} />
          ))}
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Cart Summary</h5>
              <form className="container">
                <div className="form-group m-3">
                  <label htmlFor="user">Name</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="user"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group m-3">
                  <label htmlFor="contactno">Contact No</label>
                  <input
                    type="tel"
                    className="form-control mt-2"
                    id="contactno"
                    placeholder="Enter Contact no"
                    value={contactno}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
                <div className="form-group m-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="address"
                    placeholder="Enter Delivery Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </form>
              <h6 className="card-subtitle mb-2 text-muted text-center">Total: Rs. {cartTotal}</h6>
              <div className="text-center">
                <StripeCheckout
                  name="Your Order"
                  amount={cartTotal * 100}
                  currency="INR"
                  token={handleOrder}
                  stripeKey=""
                  disabled={!isFormValid}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
