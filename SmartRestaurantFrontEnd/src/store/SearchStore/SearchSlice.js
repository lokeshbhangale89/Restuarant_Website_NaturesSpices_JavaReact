import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchResultsAPI } from './SeachAPI';

const initialState = {
  searchresults: [],
  loading: false,
  error: null,
};

const SearchSlice = createSlice({
  name: 'searchresults',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchresults = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setSearchResults, setError } = SearchSlice.actions;

export const fetchSearchResults = (query) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const results = await fetchSearchResultsAPI(query);
    dispatch(setSearchResults(results));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default SearchSlice.reducer;
