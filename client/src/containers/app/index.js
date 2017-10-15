import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import Home from '../home';
import Auth from '../auth';
import About from '../about';
import NoMatch from '../noMatch';
import { userIsAuthenticated, userIsNotAuthenticated, loginOrLogout } from '../auth/utils';

const App = () => (
  <div>
    <Menu fixed='top' size='large'>
      <Container>
        <Menu.Item header as={Link} to='/'>Ornament Web Boilerplate</Menu.Item>
        <Menu.Item position='right' as={Link} to='/about-us'>About</Menu.Item>
        {loginOrLogout()}
      </Container>
    </Menu>

    <Container style={{marginTop:'5em'}}>
      <Switch>
        <Route exact path="/" component={userIsAuthenticated(Home)} />
        <Route exact path="/login" component={userIsNotAuthenticated(Auth)} />
        <Route exact path="/about-us" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </div>
)

export default App;
