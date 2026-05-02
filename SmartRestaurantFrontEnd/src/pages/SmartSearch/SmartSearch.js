import React, { useEffect } from 'react';
import FoodCard from '../../components/FoodItemCard/FoodCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAsync } from '../../store/cartStore/cartSlice';
import { fetchSearchResults } from '../../store/SearchStore/SearchSlice';
import { getCookie } from '../../cookie';
import './SmartSearch.css';
import AiAssistant from '../../components/AIAssistant/AIAssistant';
import OpenAiButton from '../../components/AIAssistant/OpenAIButton';

function SmartSearch() {
  const dispatch = useDispatch();

  const { searchresults, loading, error } = useSelector(
    (state) => state.searchresults
  );

  const query = new URLSearchParams(window.location.search).get('q');

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchResults(query));
    }
  }, [query, dispatch]);

  const onAddToCart = (fooditem) => {
    if (getCookie('access_token')) {
      dispatch(addToCartAsync(fooditem.productId, 1));
    } else {
      alert("Please login to add item to cart");
    }
  };

  const dataToShow = Array.isArray(searchresults) ? searchresults : [];

  return (
    <div className="container mt-3 mb-5 smart-search-container">

      {/* HEADER */}
      <div className="search-header mb-3">
        <h2>🍽️ Best Results</h2>
        <p>You searched for <strong>"{query}"</strong></p>
      </div>

      <div className="row">

        {/* LEFT SIDE - RESULTS */}
        <div className="col-md-9">

          {loading && <p className="text-primary">Loading...</p>}
          {error && <p className="text-danger">{error}</p>}

          <div className="row row-cols-1 row-cols-md-3 g-4 text-center">

            {dataToShow.length > 0 ? (
              dataToShow.map((item) => (
                <FoodCard
                  key={item.id}
                  fooditem={item}
                  onAddToCart={onAddToCart}
                />
              ))
            ) : (
              !loading && <p>No results found for your query.</p>
            )}

          </div>
        </div>

        {/* RIGHT SIDE - FIXED AI PANEL */}
        <div className="col-md-3">
          <div className="ai-side-panel">
            <p className="ai-title">🤖 AI Assistant</p>
            <p className="ai-subtext">
              Not sure what to eat? Let AI suggest for you.
            </p>

            <OpenAiButton text="Ask AI 🍽️" />

          </div>
        </div>

      </div>

      {/* OPTIONAL FULL AI SYSTEM */}
      <AiAssistant />

    </div>
  );
}

export default SmartSearch;