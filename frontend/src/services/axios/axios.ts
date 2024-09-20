import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:3005",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
