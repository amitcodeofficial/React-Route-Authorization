const Permission = {
  isAuthenticated: false,
  authenticate() {
    // this.isAuthenticated = true;
    localStorage.setItem('permission',true);
  },
  removeAuthenticate() {
    // this.isAuthenticated = false;
    localStorage.removeItem('permission');
  },
  getAuthenticated() {
    if(this.authenticate==false){
      return this.isAuthenticated;
    }else{
      return localStorage.getItem("permission");
    }
  },
};

export default Permission;
