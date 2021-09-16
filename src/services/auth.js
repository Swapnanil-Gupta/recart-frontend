import axiosInstance from "../config/axios-instance";
import LocalStorageService from "../services/local-storage";

const AuthService = {
  async login({ email, password }) {
    try {
      let resp = await axiosInstance.post("/user/authenticate", {
        email,
        password,
      });
      let data = resp.data;
      if (data) {
        let { accessToken, refreshToken, ...rest } = data;
        LocalStorageService.saveTokens(accessToken, refreshToken);
        return rest;
      } else {
        throw new Error("Invalid login response");
      }
    } catch (err) {
      // console.error(err);
      throw err;
    }
  },
  async signup({ name, email, password }) {
    try {
      let resp = await axiosInstance.post("/user", { name, email, password });
      let data = resp.data;
      if (data) {
        let { accessToken, refreshToken, ...rest } = data;
        LocalStorageService.saveTokens(accessToken, refreshToken);
        return rest;
      } else {
        throw new Error("Invalid signup response");
      }
    } catch (err) {
      // console.error(err);
      throw err;
    }
  },
  async validateToken() {
    try {
      let resp = await axiosInstance.get("/user/validateToken");
      let data = resp.data;
      if (data) {
        return data;
      } else {
        throw new Error("Invalid validateToken response");
      }
    } catch (err) {
      // console.error(err);
      throw err;
    }
  },
  async refreshToken() {
    try {
      const refreshToken = LocalStorageService.getRefreshToken();
      if (refreshToken) {
        let resp = await axiosInstance.post("/user/refreshToken", {
          refreshToken,
        });
        let data = resp.data;
        if (data) {
          let { accessToken, refreshToken } = data;
          LocalStorageService.saveTokens(accessToken, refreshToken);
        }
      } else {
        throw new Error("No refresh token in localStorage");
      }
    } catch (err) {
      // console.error(err);
      throw err;
    }
  },
  logout() {
    // TODO: Invalidate refresh token by calling api
    LocalStorageService.removeTokens();
  },
};

export default AuthService;
