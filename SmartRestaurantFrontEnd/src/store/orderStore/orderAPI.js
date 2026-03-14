import axios from 'axios';

// Axios instance with credentials
const api = axios.create({
  baseURL: 'http://localhost:4000/api',
  withCredentials: true, // <-- sends cookies automatically
});

// Fetch user orders
export const fetchOrdersAPI = async () => {
  try {
    const response = await api.get('/orders/getordersbyuser');
    return response.data.orders;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('User is not logged in.');
    }
    throw error;
  }
};

// Create new order
export const createOrderAPI = async (orderData) => {
  try {
    const response = await api.post('/orders/createorders', orderData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('User is not logged in.');
    }
    throw error;
  }
};
