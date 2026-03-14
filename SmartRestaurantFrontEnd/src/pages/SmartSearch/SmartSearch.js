import React, { useEffect } from 'react';
import FoodCard from '../../components/FoodItemCard/FoodCard';
import { useDispatch } from 'react-redux';
import { addToCartAsync } from '../../store/cartStore/cartSlice';
import { fetchSearchResults } from '../../store/SearchStore/SearchSlice';
import { useSelector } from 'react-redux';
import { getCookie } from '../../cookie';

function SmartSearch() {
  const { searchresults, loading, error } = useSelector((state) => state.searchresults);
  const dispatch = useDispatch()

  const query = new URLSearchParams(window.location.search).get('q');

  const onAddToCart = (fooditem, quantity) => {
    if(getCookie('access_token')){
      dispatch(addToCartAsync(fooditem, quantity))
        .then(() => alert('Item added to the cart successfully!'))
        .catch((err) => alert(err.message || 'Something went wrong!'));
    }
    else{
      alert("Please login to add item to cart")
    }
  };

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchResults(query));
    }
  }, [query, dispatch]);

  return (
    <div className="container mt-2 mb-4">
      <h2 className="mb-3">Here are best results</h2>
      <h4 className="mb-1">You Searched for"{query}"</h4>

      {loading && <p className='text-primary'>loading</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="row">
      <div className="row row-cols-1 row-cols-md-4 g-4 text-center">

        {searchresults.length > 0 ? (
          searchresults.map((item) => (
            <FoodCard
            key={item.id}
            fooditem={item}
            onAddToCart={onAddToCart}
          />
          ))
        ) : (
          !error && <p>No results found for your query.</p>
        )}
        </div>
      </div>
    </div>
  );
}

export default SmartSearch;
