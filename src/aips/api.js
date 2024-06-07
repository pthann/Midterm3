import axios from "axios";
const apiClient = axios.create({
  baseURL: `https://api.github.com`,
});

export const get = async (url) => {
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};