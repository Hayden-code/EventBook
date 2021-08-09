import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  login(token) {
    localStorage.setItem("token", token);
    window.location.assign("/dashboard");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  logout() {
    localStorage.removeItem("token");
    window.location.assign("/");
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("token");
      return true;
    }
    return false;
  }
}

export default new AuthService();
