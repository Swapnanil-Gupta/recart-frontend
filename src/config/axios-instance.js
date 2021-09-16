import axios from "axios";
import LocalStorageService from "../services/local-storage";
import AuthService from "../services/auth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    // console.info("Axios intercepting request");
    const accessToken = LocalStorageService.getAccessToken();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      // console.info("Axios intercepting response");
      originalRequest._retry = true;
      try {
        // console.info("Attempting to refresh token");
        await AuthService.refreshToken();
        return axiosInstance(originalRequest);
      } catch (err) {
        // console.error("Refresh token failed", err);
        return Promise.reject(error);
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
