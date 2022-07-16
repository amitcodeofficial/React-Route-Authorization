import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Auth from './components/Auth';

import About from './components/About';
import Home from './components/Home';
import Topics from './components/Topics';
import Trial from './components/Trial';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/trial">Trial</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route path="/" exact component={Home} />
        <Auth path="/topics" exact component={Topics} />
        <Auth path="/about" exact component={About} />
        <Auth path="/trial" exact component={Trial} />
      </Switch>
    </div>
  </Router>
);

render(<BasicExample />, document.getElementById('root'));
