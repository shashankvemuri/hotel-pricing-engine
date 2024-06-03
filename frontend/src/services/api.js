import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const fetchPrices = async (occupancy, minPrice) => {
  try {
    const response = await axios.get(`${API_URL}/prices`, {
      params: { occupancy, minPrice },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching prices:', error);
    throw error;
  }
};

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};