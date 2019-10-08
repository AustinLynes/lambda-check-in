import React from 'react';
import '../../styles/App.scss';

import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../../util/PrivateRoute'
import StudentForm from '../routes/StudentForm';
import Login from '../routes/Login';
import Home from '../routes/Home';

function Router() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <PrivateRoute path='/take-attendence' component={StudentForm} />
    </Switch>
  );
}

export default Router;
