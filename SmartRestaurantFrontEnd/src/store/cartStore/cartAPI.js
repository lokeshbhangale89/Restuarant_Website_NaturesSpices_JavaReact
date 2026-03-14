import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { getCookie } from '../../cookie';
import { isloggedIn } from '../../utils/utils';

const getUserID = () => {
  const accessToken = getCookie('access_token');
  if (!accessToken) return null;
  const decoded = jwt_decode(accessToken);
  return decoded._id;
};

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
  const userID = getUserID();
  if (!userID) {
    console.warn("User is not logged in. Cannot remove all items from cart.");
    return null;
  }

  const response = await axios.delete('http://localhost:4000/api/carts/removeallfromcart', {
    params: { _id: userID, accessToken: getCookie('access_token') },
  });
  return response.data;
};

export const createOrderAPI = async (orderData) => {
  const userID = getUserID();
  if (!userID) {
    console.warn("User is not logged in. Cannot create an order.");
    return null;
  }
  console.log(orderData, "orderdataa")

  const response = await axios.post('http://localhost:4000/api/orders/createorders', {
    userID,
    ...orderData,
    accessToken: getCookie('access_token'),
  });
  return response.data;
};
