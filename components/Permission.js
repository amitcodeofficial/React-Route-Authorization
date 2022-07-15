const Permission = {
  isAuthenticated: false,
  authenticate() {
    this.isAuthenticated = true;
  },
  removeAuthenticate() {
    this.isAuthenticated = false;
  },
  getAuthenticated() {
    return this.isAuthenticated;
  },
};

export default Permission;
