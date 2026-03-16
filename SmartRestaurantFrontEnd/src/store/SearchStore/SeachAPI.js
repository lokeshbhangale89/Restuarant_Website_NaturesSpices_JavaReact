import axios from 'axios';

export const fetchSearchResultsAPI = async (query) => {
    const response = await axios.get('http://localhost:4000/api/fooditems/search', {
        params: { q: query },
      });
      console.log(response.data, "response data");
  return response.data
}

