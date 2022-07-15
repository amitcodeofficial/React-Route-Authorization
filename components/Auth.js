import React from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const Auth = ({ auth , component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => {
    if(auth) return <Component {...props} />
    if(!auth) return <Redirect to='/' />
  }}
  />;
}

export default Auth;