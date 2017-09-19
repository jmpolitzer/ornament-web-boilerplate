import React from 'react';
import { Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Grid, Navbar, Nav, NavItem, Jumbotron } from 'react-bootstrap';
import Home from '../home';
import About from '../about';

const App = () => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Ornament-Bootstrap</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/about-us">
            <NavItem eventKey={12}>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Jumbotron>
      <Grid>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </Grid>
    </Jumbotron>
  </div>
)

export default App;
