import { createSlice } from '@reduxjs/toolkit';
import { fetchFoodItemsData } from './foodItemsAPI';

const initialState = {
  foodItems: [],
  loading: false,
  error: null,
};

const foodItemsSlice = createSlice({
  name: 'foodItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodItemsData.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(fetchFoodItemsData.fulfilled, (state, action) => {
        state.loading = false;
        state.foodItems = action.payload.products || []; 
      })
      .addCase(fetchFoodItemsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong while fetching food items';
      });
  },
});

export default foodItemsSlice.reducer;
