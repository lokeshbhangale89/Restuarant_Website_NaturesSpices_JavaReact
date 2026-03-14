import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFoodItemsData = createAsyncThunk('foodItems/fetchFoodItemsData', async () => {
  const response = await axios.get('http://localhost:4000/api/fooditems');
  return response.data;
});
