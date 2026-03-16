import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../../store/orderStore/orderSlice';
import { isloggedIn } from '../../utils/utils';

const formatDate = (dateStr) => {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const OrdersList = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (isloggedIn()) {
      dispatch(fetchOrders());
    } else {
      alert('Please login to fetch orders');
    }
  }, [dispatch]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className="ms-3 text-muted">Loading orders...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          <span>Failed to load orders: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
      <h1 className="text-center mb-2">Order Items</h1>
      <p className="text-center text-muted mb-5">
        {orders.length} {orders.length === 1 ? 'order' : 'orders'} found
      </p>

      {orders.length === 0 ? (
        <div className="text-center py-5">
          <i className="bi bi-bag-x fs-1 text-muted"></i>
          <p className="mt-3 text-muted">No orders found.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Requester</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Products</th>
                <th>Total</th>
                <th>Ordered On</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id || order._id}>
                  <td className="text-muted small">{index + 1}</td>
                  <td className="fw-semibold">{order.name || '—'}</td>
                  <td>{order.contactno || '—'}</td>
                  <td>{order.address || '—'}</td>
                  <td>
                    {order.products && order.products.length > 0 ? (
                      <ul className="list-group list-group-flush text-start">
                        {order.products.map((product, pIndex) => (
                          <li
                            key={product.productId || pIndex}
                            className="list-group-item px-2 py-1"
                          >
                            <div className="d-flex justify-content-between align-items-center gap-3">
                              <span className="text-truncate">
                                {product.name || (
                                  <span className="text-muted fst-italic">Unknown product</span>
                                )}
                              </span>
                              <span className="badge bg-secondary text-nowrap">
                                ×{product.quantity ?? 1}
                              </span>
                              <span className="text-nowrap fw-medium">
                                ₹{product.price != null ? product.price.toFixed(2) : '0.00'}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-muted fst-italic">No products</span>
                    )}
                  </td>
                  <td className="fw-bold text-success">
                    ₹{order.total != null ? order.total.toFixed(2) : '0.00'}
                  </td>
                  <td className="small text-muted text-nowrap">
                    {formatDate(order.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrdersList;