import axios from 'axios';

export const fetchSearchResultsAPI = async (query) => {
    const response = await axios.get('http://localhost:8081/api/products/search', {
        params: { searchterm: query },
      });
      console.log(response.data, "response data");
  return response.data
}

