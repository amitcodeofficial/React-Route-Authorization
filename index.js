import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import Auth from './components/Auth';

import About from './components/About';
import Home from './components/Home';
import Topics from './components/Topics';
import Trial from './components/Trial';

// const [authorization, setAuthorization] = useState('');

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to='/trial'>Trial</Link></li>
        {/* <button onClick={() => {}}>Submit</button> */}
      </ul>

      <hr />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/topics" component={Topics} />
      <Auth path='/about' component={ About } />
      {/* <Route exact path='/trial' component={Trial} /> */}
      {/* <Auth path='/trial' component={Trial} auth={true}/> */}
      </Switch>
    </div>
  </Router>
);

render(<BasicExample />, document.getElementById('root'));
