import React from 'react';
import { Route } from 'react-router-dom'
import HomeLayout from './HomeLayout';

const RouteLayout = ({ component: Component, ...rest }) => {
  //todo: logic for validate user 

  return (
    <Route {...rest} render={matchProps => (
      <HomeLayout>
        <Component {...matchProps} />
      </HomeLayout>
    )} />
  )
};

export default RouteLayout;
