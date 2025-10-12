// src/auth.js
// A simple authentication simulator

const auth = {
  isAuthenticated: false,
  login(callback) {
    auth.isAuthenticated = true;
    setTimeout(callback, 100); // Simulate async call
  },
  logout(callback) {
    auth.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export default auth;