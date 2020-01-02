  
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Dashboard from './views/Dashboard/Dashboard';
import RouteWithLayout from './component/RouteWithlayout/RoutWithLayout';
import MainLayout from './layoutes/layoutes/Main/Main';

const Routes = ()=> {
    return(
        <Switch>
        <Redirect
          exact
          from="/"
          to="/dashboard"
        />
        <RouteWithLayout
          component={Dashboard}
          exact
          layout={MainLayout}
          path="/dashboard"
        />
        <Redirect to="/not-found" />
        </Switch>
    )
}

export default Routes