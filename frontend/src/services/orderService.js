import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

// Place an order
export const placeOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_URL}/api/orders`, orderData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error placing order:', error);
    throw error.response ? error.response.data : new Error('Error placing order');
  }
};

// Get all orders
export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/orders`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error.response ? error.response.data : new Error('Error fetching orders');
  }
};

// Get a single order by ID
export const getOrderById = async (orderId) => {
  try {
    const response = await axios.get(`${API_URL}/api/orders/${orderId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error.response ? error.response.data : new Error('Error fetching order');
  }
};

// Delete an order
export const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`${API_URL}/api/orders/${orderId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting order:', error);
    throw error.response ? error.response.data : new Error('Error deleting order');
  }
};

// Update payment status
export const updatePaymentStatus = async (orderId, paymentStatus) => {
  try {
    const response = await axios.put(`${API_URL}/api/orders/${orderId}/payment`, { paymentStatus }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating payment status:', error);
    throw error.response ? error.response.data : new Error('Error updating payment status');
  }
};
