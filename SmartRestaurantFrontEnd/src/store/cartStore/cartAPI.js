import axios from 'axios';
import { getCookie } from '../../cookie';
import { isloggedIn } from '../../utils/utils';

export const fetchCartItemsAPI = async () => {
  ;
  if (!isloggedIn()) {
    console.warn("User is not logged in. Cannot fetch cart items.");
    return { cart: [], total: 0 };
  }

  const response = await axios.get('http://localhost:4000/api/cart/getcartitems', {
    withCredentials: true
  });
  console.log("response from fetchCartItemsAPI: ", response)
  return response.data;
};

export const addToCartAPI = async (productid, quantity) => {

  const response = await axios.post(
    'http://localhost:4000/api/cart/addtocart',
    {
      productId: productid,
      quantity: quantity
    },
    {
      withCredentials: true
    }
  );
  return response;
};


export const removeProductFromCartAPI = async (productId) => {

  const response = await axios.delete(
    `http://localhost:4000/api/cart/remove`,
    {
      params: { productId },
      withCredentials: true
    }
  );
  return response;
};

export const removeAllFromCartAPI = async () => {
  if (!isloggedIn()) {
    console.warn("User is not logged in. Cannot remove all items from cart.");
    return null;
  }

  const response = await axios.delete('http://localhost:4000/api/cart/clear',{
    withCredentials: true
  });
  return response.data;
};

export const createOrderAPI = async (orderData) => {

  if (!isloggedIn()) {
    console.warn("User is not logged in. Cannot create an order.");
    return null;
  }
  console.log(orderData, "orderdataa")

  const response = await axios.post('http://localhost:4000/api/orders/createorders', 
  {
    ...orderData
  }, 
  {
    withCredentials: true
  });
  return response.data;
};
