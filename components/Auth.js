import React from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Permission from './Permission';

// const Auth = ({ auth , component: Component, ...rest }) => {
const Auth = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => {
    if(Permission.getAuthenticated()) return <Component {...props} />
    if(!Permission.getAuthenticated()) return <Redirect to='/' />
  }}
  />;
}

export default Auth;