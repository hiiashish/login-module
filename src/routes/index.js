import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import LogInPage  from '../pages/login';
import SearchPage  from "../pages/search";

const createRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={LogInPage} />
            <PrivateRoute path='/search-planet' component={SearchPage} />
        </Switch>
   </BrowserRouter>
)
export default createRoutes;