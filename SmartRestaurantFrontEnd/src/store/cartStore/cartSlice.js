import { createSlice } from '@reduxjs/toolkit';
import { fetchCartItemsAPI, addToCartAPI, removeAllFromCartAPI, removeProductFromCartAPI } from './cartAPI';

const initialState = {
  cartItems: [],
  cartTotal: 0,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload.cart;
      state.cartTotal = action.payload.total;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setCartItems, setError } = cartSlice.actions;

export const fetchCartItems = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const data = await fetchCartItemsAPI();
    dispatch(setCartItems(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addToCartAsync = (productid, quantity) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await addToCartAPI(productid, quantity);
    console.log("response from addToCartAPI: ", response)
    if (response.status === 200) {
      alert('Item added to the cart successfully!')
    }

  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const removeProductFromCart = (productId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await removeProductFromCartAPI(productId);
    if (response.status === 200) {
        alert('Item removed from the cart successfully!')
    }
    const updatedCart = await fetchCartItemsAPI();
    dispatch(setCartItems(updatedCart));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const removeAllFromCart = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await removeAllFromCartAPI();
    dispatch(setCartItems({ cart: [], total: 0 }));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default cartSlice.reducer;
