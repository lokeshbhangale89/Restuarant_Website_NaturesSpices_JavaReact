import "./FoodItems.css";
import { Link } from 'react-router-dom';
import FoodCard from "../../components/FoodItemCard/FoodCard";
import { useEffect, useState } from "react";
// import fooditems from "../../data/foo9ditems_data";
import { useSelector, useDispatch } from 'react-redux';
import { fetchFoodItemsData } from '../../store/foodItemsStore/foodItemsAPI';
import { addToCartAsync } from "../../store/cartStore/cartSlice";
import { isloggedIn } from "../../utils/utils";

const FoodItems = () => {
  const dispatch = useDispatch();

  const { foodItems, loading, error } = useSelector((state) => state.foodItems);
  const islogin = isloggedIn();
  const onAddToCart = (fooditem, quantity) => {
    if(islogin){
      dispatch(addToCartAsync(fooditem.productId, quantity=1))
        .catch((err) => alert(err.message || 'Something went wrong!'));
    }
    else{
      alert("Please login to add item to cart")
    }
  };

  useEffect(() => {
    dispatch(fetchFoodItemsData());
  }, []);

  return (
    <div className="container fooditems">

      {!error && !loading && isloggedIn() && <div className="d-flex justify-content-center align-items-center mb-4">
        <Link to='/cart' className="btn btn-dark">Go to Cart</Link>
      </div>}

      <h2 className="text-center mb-3">Popular Food</h2>
      <h2 className="text-center mb-4 text-secondary">Our Special Dishes</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4 text-center">
        {loading && <div className="mt-5">Loading food items...</div>}
        {error && <div className="mt-5">Error: {error}</div>}
        {foodItems.length > 0 && foodItems.map((fooditem) => (
          <FoodCard
            key={fooditem.id}
            fooditem={fooditem}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default FoodItems
