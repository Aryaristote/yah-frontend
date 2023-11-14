import axios from 'axios';

const api = axios.create({
  baseURL: 'https://649895369543ce0f49e22cc6.mockapi.io', 
});

export const fetchData = async () => {
  try {
    const response = await api.get('/users'); 
    return response.data;
  } catch (error) {
    console.error(error);
  }
};