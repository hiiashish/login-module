import React from 'react';  
import { Redirect, Route } from 'react-router-dom';
import { checkCookie } from '../utils/cookieHandler';
import HomeLayout from '../layout/homeLayout'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={props => (
    checkCookie() !== null ? (
      <HomeLayout>
        <Component { ...props } />
      </HomeLayout>
    ) : (
      <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}
      />
    )
  )} />
);

export default PrivateRoute;