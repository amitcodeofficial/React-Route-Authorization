import React, { useEffect } from 'react';
import Permission from './Permission';

const Home = (props) => {
  return (
  <div>
    <h2>Home</h2>
    <p><button onClick={() => Permission.authenticate()}>Login</button></p>
    <button onClick={() => Permission.removeAuthenticate()}>LogOut</button>
  </div>
  );
};

export default Home;
