import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <ul className="navbar">
        <li className="nav-item">
            <Link to={ROUTES.SIGN_IN} className="nav-item nav-link btn btn-primary">Sign In</Link>
        </li>
        <li className="nav-item">
            <Link to={ROUTES.SIGN_UP} className="nav-item nav-link btn btn-outline-primary">Sign Up</Link>
        </li>
    </ul>
  </div>
);

export default Navigation;