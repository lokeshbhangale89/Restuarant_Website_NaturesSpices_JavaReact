import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../../store/orderStore/orderSlice';
import { isloggedIn } from '../../utils/utils';

const OrdersList = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if(isloggedIn()){
      dispatch(fetchOrders());
    }
    else{
      alert("Please login to fetch orders")
    }
  }, []);

  if (loading) return <div>Loading orders...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
      <h1 className="text-center mb-5">Order Items</h1>
      {orders.length === 0 ? (
        <p className="text-center">No orders found.</p>
      ) : (
        <table className="table table-striped table-bordered text-center">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Contact No</th>
              <th>Address</th>
              <th>Products</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.contactno}</td>
                <td>{order.address}</td>
                <td>
                  <ul className="list-group">
                    {order.products.map((product) => (
                      <li key={product._id} className="list-group-item">
                        <div className="d-flex justify-content-between">
                          <span>{product.name}</span>
                          <span>${product.price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </td>
                <td>${order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrdersList;
