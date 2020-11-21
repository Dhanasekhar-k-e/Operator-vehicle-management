import React from 'react';
import {
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import Navigation from '../Navigation';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import HomePage from '../Home';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr/>
      <Route exact path={ROUTES.LANDING} component={SignInPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
    </div>
  </Router>
);

export default App;