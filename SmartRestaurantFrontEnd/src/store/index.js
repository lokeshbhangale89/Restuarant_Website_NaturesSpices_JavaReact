import { configureStore } from '@reduxjs/toolkit';
import foodItemsSlice from "./foodItemsStore/foodItemsSlice"
import cartSlice from "./cartStore/cartSlice"
import orderSlice from "./orderStore/orderSlice"
import SearchSlice from "./SearchStore/SearchSlice"

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    orders: orderSlice,
    foodItems: foodItemsSlice,
    searchresults: SearchSlice,
  },
});
