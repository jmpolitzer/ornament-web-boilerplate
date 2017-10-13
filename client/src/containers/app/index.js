import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import Home from '../home';
import About from '../about';

const App = () => (
  <div>
    <Menu fixed='top' size='large'>
      <Container>
        <Menu.Item header as={Link} to='/'>Ornament Web Boilerplate</Menu.Item>
        <Menu.Item position='right' as={Link} to='/about-us'>About</Menu.Item>
        <Menu.Item as={Link} to='/'>Login</Menu.Item>
        <Menu.Item as={Link} to='/'>Signup</Menu.Item>
      </Container>
    </Menu>

    <Container style={{marginTop:'5em'}}>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </Container>
  </div>
)

export default App;
