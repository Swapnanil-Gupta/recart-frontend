const LocalStorageService = {
  saveTokens(accessToken, refreshToken) {
    this.removeTokens();
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  },
  removeTokens() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
  getAccessToken() {
    return localStorage.getItem("accessToken");
  },
  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  },
};

export default LocalStorageService;
