import React from 'react';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { Cookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const cookies = new Cookies();
const locationHelper = locationHelperBuilder();

export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: () => cookies.get('ornament-token') !== undefined,
  wrapperDisplayName: 'UserIsAuthenticated'
});

export const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
  allowRedirectBack: false,
  authenticatedSelector: () => cookies.get('ornament-token') === undefined,
  wrapperDisplayName: 'UserIsNotAuthenticated'
});

export const loginOrLogout = () => {
  const isAuthenticated = cookies.get('ornament-token') !== undefined;

  if(isAuthenticated) {
    return <Menu.Item onClick={destroyToken}>Logout</Menu.Item>;
  } else {
    return <Menu.Item as={Link} to='/login'>Login</Menu.Item>;
  }
}

const destroyToken = (e) => {
  e.preventDefault();
  cookies.remove('ornament-token');
  window.location.reload();
}
