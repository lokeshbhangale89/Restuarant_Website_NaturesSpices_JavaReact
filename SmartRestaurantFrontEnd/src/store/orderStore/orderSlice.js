import { createSlice } from '@reduxjs/toolkit';
import { fetchOrdersAPI, createOrderAPI } from './orderAPI';

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setOrders, setError } = orderSlice.actions;

export const fetchOrders = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const orders = await fetchOrdersAPI();
    dispatch(setOrders(orders));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const createOrder = (orderData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await createOrderAPI(orderData);
    const updatedOrders = await fetchOrdersAPI(); 
    dispatch(setOrders(updatedOrders));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default orderSlice.reducer;
