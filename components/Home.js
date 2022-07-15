import React from 'react';
import Permission from './Permission';

const Home = (props) => {
  return (
  <div>
    <h2>Home</h2>
    <button onClick={() => Permission.authenticate()}>Give Permission</button>
  </div>
  );
};

export default Home;
