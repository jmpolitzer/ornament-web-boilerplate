import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { Cookies } from 'react-cookie';

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
